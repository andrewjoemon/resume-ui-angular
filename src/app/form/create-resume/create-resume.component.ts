import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formlist } from '../form';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'ajui-create-resume',
  templateUrl: './create-resume.component.html',
  styleUrls: ['./create-resume.component.css']
})
export class CreateResumeComponent   {

  constructor(private formService:FormsService){}
 



  successMessage:string="No Form Added";

  form:formlist={
    ftype:"",
    photo:"",
    dateofbirth:new Date(),
    rating:0
  }

  addForm(form3:NgForm){
    this.formService.addForms(this.form).subscribe((data)=>{
      this.successMessage="Form Added Successfully";
     // form3.reset();
     form3.resetForm({
      ftype:"",
      photo:"",
      dateofbirth:new Date(),
      rating:0
     })
    })
  }

}
