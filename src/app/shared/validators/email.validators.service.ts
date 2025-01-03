import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    const hhtpCallObservable = new Observable<ValidationErrors | null>( (subscriber ) => {
      console.log( {email} );

      if (email === 'angelpoot@gmail.com') {
        subscriber.next({ emailTaken: true });
        subscriber.complete();
        return;
      }

      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      delay(3000)
    )

    return hhtpCallObservable;
  }
}
  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log(email);

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )

// return this.http.get<any[]>(`${this.baseUrl}/usuarios?q=${email}`)
//   .pipe(
//     map( resp => {
//       return ( resp.lenght === 0 ) ? null : { emailTaken: true }
//     })
//   );
