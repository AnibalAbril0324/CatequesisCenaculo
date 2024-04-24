import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  maxDate:Date;

  constructor(public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>,private fb:FormBuilder){
    this.maxDate= new Date();
    this.form = this.fb.group({
      
      //'Cedula', 'Nombre', 'Apellido', 'Telefono','Direccion','Sexo','fecha_Nacimiento',
      cedula: ['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
      nombre: ['',[Validators.required,Validators.maxLength(30)]],
      apellido: ['',[Validators.required,Validators.maxLength(30)]],
      telefono: ['',[Validators.required,Validators.maxLength(15)]],
      direccion: ['',[Validators.required,Validators.maxLength(50)]],
      sexo: [null,Validators.required],
      fecha_nacimiento: [null,Validators.required],

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
    console.log(this.form)
  }
}
