import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';

const listpersonas: Persona[] = [
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
  {cedula:"0105541510",nombre: "Anibal", apellido: "Abril", telefono: "0987654321", 
    direccion : "Banos",sexo : "Masculino",fecha_nacimiento: new Date()},
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements AfterViewInit{


  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Telefono','Direccion','Sexo','fecha_Nacimiento'];
  dataSource : MatTableDataSource<Persona>;;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource(listpersonas);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
