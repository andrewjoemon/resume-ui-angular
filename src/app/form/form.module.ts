import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { CreateResumeComponent } from './create-resume/create-resume.component';
import { FormListComponent } from './form-list/form-list.component';
import { FormComponent } from './form.component';
import { SubmitformComponent } from './submitform/submitform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';
import { PopupComponent } from './popup/popup.component';
import { routeConfigToken } from '../services/routeConfig.service';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FormComponent,
    FormListComponent,
    SubmitformComponent,
    CreateResumeComponent,
    PopupComponent,
    FilterPipe,


],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    NavbarModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers:[{
    provide:routeConfigToken,
    useValue:{title:"Form"}
  }]
})
export class FormModule { }
