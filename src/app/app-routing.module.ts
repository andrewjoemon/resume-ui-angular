import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {component:TemplateComponent,
  path:"template"},
  {
    component:FormComponent,
    path:"form"
  },
  {
    component:AppComponent,
    path:""
  },
  {
    component:AboutComponent,
    path:"about"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
