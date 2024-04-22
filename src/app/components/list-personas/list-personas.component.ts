import { Component } from '@angular/core';
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
export class ListPersonasComponent {
  displayedColumns: string[] = ['Cedula', 'Nombre', 'Apellido', 'Telefono','Direccion','Sexo','fecha_Nacimiento'];
  dataSource = listpersonas;
}
