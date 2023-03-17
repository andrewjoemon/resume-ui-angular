import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidator {
    static ValidateName(control:AbstractControl){
        const value=control.value as string;
        if(value.includes('test')){
            return {invalidName:true}
        }
        return null;
    }

    static ValidateSpecialChar(char:string){
        return (control:AbstractControl) =>{
            const value=control.value as string;
            if(value.includes(char)){
                return{invalidSpecialChar:true}
            }
            return null;
        }
    }

    static ValidateDate(control:FormControl){
        const checkindate:any=new Date(control.get('checkinDate')?.value);
        const checkoutdate:any=new Date(control.get('checkoutDate')?.value);
        const timediff=checkoutdate - checkindate;
        const daydiff=timediff/(1000*60*60*24);
        if(daydiff<=0){
            return control.get('checkoutDate')?.setErrors({
                invalidDate:true
            })
        }
        return null;

    }
}
