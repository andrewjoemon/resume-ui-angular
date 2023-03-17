import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'ajui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router, private loginService:LoginService){}
email:string="";
password:string="";

submit(loginform:NgForm){
  // if(this.email=="admin@mail.com" && this.password=="admin"){
  // //alert('Form submitted successfully');
  // this.route.navigate(['/form','create-resume']);
  if(this.loginService.login(this.email,this.password)){
    this.route.navigate(['/form']);
  }
  
  }
}

