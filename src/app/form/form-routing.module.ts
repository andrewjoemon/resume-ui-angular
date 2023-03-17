import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { FormComponent } from './form.component';
import { FormGuard } from './guards/form.guard';
import { SubmitformComponent } from './submitform/submitform.component';

const routes: Routes = [{
  component:FormComponent,
  //path:"form",
  path:"",
  children: [ {
    path:'create-resume',
    component:CreateResumeComponent
  },
  // {
  //   path: ':id',
  //   component: SubmitformComponent
  // },
 ],
 canActivateChild:[FormGuard]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
