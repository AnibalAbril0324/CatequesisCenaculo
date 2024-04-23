import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';
import { AgregarEditarPersonaComponent } from '../agregar-editar-persona/agregar-editar-persona.component';

const listpersonas: Persona[] = [
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Tatiana", apellido: "Guallpa", telefono: "0987654443", 
    direccion : "Banos",sexo : "Femenino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Estefania", apellido: "Loja", telefono: "0987654321", 
    direccion : "Banos",sexo : "Femenino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Freddy", apellido: "Mercury", telefono: "0123456789", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Daniel", apellido: "Gomez", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements AfterViewInit{


  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Telefono','Direccion','Sexo','fecha_Nacimiento','Acciones'];
  dataSource : MatTableDataSource<Persona>;;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog){
    this.dataSource = new MatTableDataSource(listpersonas);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEditPersona(){
    const dialogRef = this.dialog.open(AgregarEditarPersonaComponent, {
      width:'550px',
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
