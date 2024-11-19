import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ValidatorService } from '../../../shared/service/validator.service';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{


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

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
  ) {}

  ngOnInit(): void {

  }

  isValidField( field: string ): boolean | null {
    return this.validatorService.isValidField( this.myForm, field );
  }

  getFieldErrorMessage( field: string ): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for ( const key of Object.keys(errors) ) {
      switch( key ) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength} caracteres.`;
      }
    }

    return null;
  }

  onSave(): void {

    if ( this.myForm.invalid ) return;

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0,
      inStorage: 0
    });
  }

}
