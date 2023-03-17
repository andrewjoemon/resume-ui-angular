import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SubmittedformComponent } from '../submittedform.component';

@Injectable({
  providedIn: 'root'
})
export class SubmitformguardGuard implements CanDeactivate<SubmittedformComponent> {
  constructor(private _snackBar:MatSnackBar){}
  canDeactivate(
    component: SubmittedformComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.submitForm.pristine){
      return component.submitForm.pristine;
    }
    else{
      this._snackBar.open('You have unsaved changes','Leave it!');
      return false;
    }
  }
  
}
