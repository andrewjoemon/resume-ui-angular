import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[ajuiEmailvalidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:EmailvalidatorDirective,
    multi:true
  }]
})
export class EmailvalidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const value=control.value as String;
    if(value.includes('test')){
      return{
        invalidEmail:true
      };
    }   
    return null; 
  }

}
