import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { FormComponent } from './form/form.component';
import { LoggerService } from './logger.service';
import {SessionStorageToken} from './sessionstorage.token'

@Component({
  selector: 'ajui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //ngAfterViewInit() {
    //const componentRef=this.vcr.createComponent(FormComponent);
    //componentRef.instance.NumberOfTemplates=10;
  //}
  constructor(@Optional() private loggerService:LoggerService, @Inject(SessionStorageToken) private sessionStorage:Storage){
  }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText="Let's go";
    this.sessionStorage.setItem('name','Captain Cool');  
  }
  // ngAfterViewInit(){
  //   const componentref=this.vcr.createComponent(FormComponent);
  //   componentref.instance.NumberOfTemplates=15;
  // }
  title = 'resume-ui';

  // @ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;
  @ViewChild('name',{static:true}) name!:ElementRef;
  role="admin";
  public c="cool";
  data={
    a:"well",
    b:"done"
  }
  max = 10;
  rate = 7;
  isReadonly = true;
  bgcolor(){
    return "green";
  }
  
}
