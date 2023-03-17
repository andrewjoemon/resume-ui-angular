import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { SubmittedformService } from './submittedform.service';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'ajui-submittedform',
  templateUrl: './submittedform.component.html',
  styleUrls: ['./submittedform.component.css']
})
export class SubmittedformComponent implements OnInit {

 

  submitForm!:FormGroup;
  get guests(){
  return this.submitForm.get('guests') as FormArray;
  }
  constructor(private submitservice:SubmittedformService,private configService: ConfigService, private fb:FormBuilder,
    private router:ActivatedRoute){}
  ngOnInit(): void {

    const id=this.router.snapshot.paramMap.get('formid')

    console.log(this.router.snapshot.params);
    
    this.submitForm=this.fb.group({
    //formid: new FormControl(''),
    formid:  new FormControl({value:id,disabled:true},{validators:[Validators.required]}),
  email: ['',[Validators.required,Validators.email]],
  checkinDate: [''],
  checkoutDate: [''],
  formStatus: [''],
  amount: ['',[Validators.required,Validators.max(500)]],
  formDate: [''],
  mobilenumber: [''],
  name: ['',[Validators.required,CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*')]],
  address:this.fb.group({
    addressline1: ['',{updateOn:'blur',validators:[Validators.required]}],
    addressline2:[''],
    city: [''],
    state: [''],
    country: [''],
    zipcode: [''],
  }),
 
  //guestCount: ['']
 // guestList: []
//  guests:this.fb.array([this.fb.group({
//   name:[''],
//   age:['']
//  })    
// ]),
  guests:this.fb.array([this.guestfn()]),
  tnc:new FormControl(false,[Validators.requiredTrue]),
},{updateOn:'blur',validators:[CustomValidator.ValidateDate]});
  this.getSubmitForm();
  // this.submitForm.valueChanges.subscribe((data)=>{
  //   console.log(data);
  // })
  this.submitForm.valueChanges.pipe(
    mergeMap((data)=>this.submitservice.submission(data))
  ).subscribe((data)=>console.log(data));

  // this.submitForm.valueChanges.pipe(
  //   switchMap((data)=>this.submitservice.submission(data))
  // ).subscribe((data)=>console.log(data));

  // this.submitForm.valueChanges.pipe(
  //   exhaustMap((data)=>this.submitservice.submission(data))
  // ).subscribe((data)=>console.log(data));


  }

submit2(){
  console.log('works now');
  console.log(this.submitForm.getRawValue());
  this.submitForm.reset({
    // formid:'2'  ,
    email: '',
    checkinDate: '',
    checkoutDate: '',
    formStatus: '',
    amount: '',
    formDate: '',
    mobilenumber: '',
    name: '',
    address:{
      addressline1: '',
      addressline2:'',
      city: '',
      state: '',
      country: '',
      zipcode: '',
    },
    guests:[],
    tnc:false
    })

    

}
addguest(){
this.guests.push(this.guestfn());

}

getSubmitForm(){
  this.submitForm.patchValue({
    // formid:'2'  ,
    email: 'test@mail.com',
    checkinDate: '',
    checkoutDate: '',
    formStatus: '',
    amount: '',
    formDate: new Date('10-Feb-2020'),
    mobilenumber: '',
    name: '',
    address:{
      addressline1: '',
      addressline2:'',
      city: '',
      state: '',
      country: '',
      zipcode: '',
    },
    guests:[],
    tnc:false
  })
}

guestfn(){
 return this.fb.group({
    name:['',{validators:[Validators.required]}],
    age:['']
  })
}

addPassport(){
  this.submitForm.addControl('passport',new FormControl(''))
}

deletePassport(){
  if(this.submitForm.get('passport')){
    this.submitForm.removeControl('passport')
  }
}

removeGuest(i:number){
  this.guests.removeAt(i);
}
}
// export class FormSubmit {
//   formid: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   formStatus: string;
//   Amount: number;
//   formDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: []
// }