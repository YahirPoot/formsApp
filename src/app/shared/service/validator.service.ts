import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidatorService {

  public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  public cantBeStrider = ( control: FormControl ): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();

    if ( value === 'strider' ) {
      return {
        notStrider: true,
      }
    }

    return null;
  }

  public isValidField( form: FormGroup, field: string) {
    return form.controls[field].errors
      && form.controls[field].touched;
  }

  // funcion que retorna un validador personalizado para validar que dos campos sean iguales
  public checkPasswords( field1: string, field2: string ) {

    // retorna un validador personalizado
    return ( formGroup: AbstractControl ): ValidationErrors | null => {

      // extraer los valores de los campos y se comparan
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if ( fieldValue1 !== fieldValue2 ) {
        // si los valores son diferentes se establece un error en el campo 2
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }

      // si los valores son iguales se limpia el error en el campo 2
      formGroup.get(field2)?.setErrors(null);
      return null;
    }
  }
}
