import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { NavbarModule } from '../navbar/navbar.module';
import { ConfigService } from '../services/config.service';
import { routeConfigToken } from '../services/routeConfig.service';

import { FormComponent } from './form.component';
import { FormsService } from './services/forms.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule, NavbarModule],
      declarations: [ FormComponent],
      providers:[FormsService,{provide: MatDialogRef,useValue:{}},{provide:MatDialog,useValue:{}},ConfigService,
      {
        provide:APP_SERVICE_CONFIG,
        useValue:{apiEndpoint: 'http://localhost:3000'}
      },
    {
      provide:routeConfigToken,
      useValue:{title:"forms"}
    }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle',()=>{
    component.showit=false;
    component.toggle();
    expect(component.showit).toBe(true);
  })
});
