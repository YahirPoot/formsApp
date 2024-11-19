import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/service/validator.service';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Hollow Knight', Validators.required],
      ['Halo', Validators.required],
      ['Metal Slug', Validators.required]
    ]),
  })

  public newFavoriteGame: FormControl = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
  ) {}


  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isValidField( field: string ): boolean | null {
    return this.validatorService.isValidField( this.myForm, field );
  }

  isValidArrayField( formArray: FormArray, i: number) {
    return formArray.controls[i].errors
      && formArray.controls[i].touched;
  }


  onAddToFavorite(): void {
    if ( this.newFavoriteGame.invalid ) return;
    const newGame = this.newFavoriteGame.value;

    this.favoriteGames.push(
      this.fb.control( newGame, Validators.required )
    );

    this.newFavoriteGame.reset();
  }

  onDeleteFavorite( i: number ): void {
    this.favoriteGames.removeAt(i);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }

}
