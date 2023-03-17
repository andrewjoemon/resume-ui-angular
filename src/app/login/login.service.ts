import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedin:boolean=false;
  isAdmin:boolean=false;

  constructor(private router:Router) { }

  login(email:string, password:string){
     if(email=="admin@mail.com" && password=="admin"){
      this.isLoggedin=true;
      this.isAdmin=true;
     }
     else if(email =="user@mail.com" && password == "user"){
      this.isLoggedin=true;
      this.isAdmin=false;
     }
     return this.isLoggedin;
  }
}
