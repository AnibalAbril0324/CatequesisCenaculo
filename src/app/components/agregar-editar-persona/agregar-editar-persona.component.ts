import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit{

  tipoSexo: string[] = ['Masculino','Femenino'];
  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>,private fb:FormBuilder){
    this.form = this.fb.group({
      //'Cedula', 'Nombre', 'Apellido', 'Telefono','Direccion','Sexo','fecha_Nacimiento',
      cedula: [''],
      nombre: [''],
      apellido: [''],
      telefono: [''],
      direccion: [''],
      sexo: [null],
      fecha_nacimiento: [null],

    })
  }

  ngOnInit(): void {
  }
  cancelar(){
    this.dialogRef.close();
  }

  addEditPersona(){
    //const nombre=this.form.value.nombre;
    //const nombre=this.form.get('nombre')?.value;
    const persona: Persona = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      telefono: this.form.value.telefono,
      direccion: this.form.value.direccion,
      sexo: this.form.value.sexo,
      fecha_nacimiento: this.form.value.fecha_nacimiento
    }
    console.log(persona)
  }
}
