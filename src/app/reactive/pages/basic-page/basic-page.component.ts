import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {


  //* Existen dos formas para crear un formulario reactivo
  //* 1. Crear un FormGroup directo (forma tradicional)
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   stock: new FormControl(0)
  // });

  //* 2. Crear un FormGroup a partir de un servicio
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0) ]],
    inStorage: [0, [ Validators.required, Validators.min(0) ]]
  })

  constructor( private fb: FormBuilder ) {}

  onSave(): void {

    if ( this.myForm.invalid ) return;
    
    console.log(this.myForm.value);
  }

}
