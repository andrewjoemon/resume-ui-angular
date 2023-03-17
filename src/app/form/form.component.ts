import { Component, DoCheck, OnInit, ViewChild,AfterViewInit, AfterViewChecked, ViewChildren, QueryList, SkipSelf, Self } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { form, formlist } from './form';
import { FormsService } from './services/forms.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { FormListComponent } from './form-list/form-list.component';
import { Observable } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'ajui-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,DoCheck,AfterViewInit,AfterViewChecked {
  @ViewChild(NavbarComponent) navbarComponent!:NavbarComponent;
  @ViewChildren(NavbarComponent) navbarChildren!:QueryList<NavbarComponent>;


  NumberOfTemplates = 3;
  frm = "Start Form";
  showit = false;
  formstart = "Show Form";
  stream = new Observable<string>(observer =>{
    observer.next('user1');
    observer.next('user2');
    observer.next('user3')
    observer.complete();
    observer.error('error found');

  })
  toggle() {
    this.showit = !this.showit;
    //this.showit == true ? this.formstart = "Stop Form" : this.formstart = "Show Form";
    // if (this.showit==false){
    this.dialogref.open(PopupComponent,{
      data:{
        name:'JK'
      }
    });
    // }
    // else{
    //   this.dialogref.closeAll;
    // }
  }
  fm: form = {
    name: "ikka",
    age: 24
  };
  flist: formlist[] = [];
  selectedForm! : formlist;
  totalBytes=0;
  

  constructor(  private formService:FormsService, private dialogref:MatDialog, private configService:ConfigService){}
  ngAfterViewInit(){
    console.log(this.navbarComponent);
    this.navbarChildren.last.title="Last Title of Instance";
    
  }
  ngAfterViewChecked(){
    this.navbarComponent.title="Forms Done";

  }
  ngDoCheck(): void {
    console.log('on changes has worked');
  }

  ngOnInit():void{
    
    console.log(this.navbarComponent);
    this.stream.subscribe({
      next:(nxt)=>console.log(nxt),
      complete:()=>console.log('completed'),
      error:(err)=>console.log(err)     
    });
    this.stream.subscribe((data)=>console.log(data));
    //this.flist= this.formService.getForms();
    this.formService.getForms$.subscribe(forms=>{
      this.flist=forms;
    })

    this.formService.getPhotos().subscribe((event) => {
      switch(event.type){
        case HttpEventType.Sent :{
          console.log("Request has been sent");
          break;
        }
        case HttpEventType.DownloadProgress : {
          this.totalBytes+= event.loaded;
          break;      
        }
        case HttpEventType.ResponseHeader : {
          console.log("Request has been made successfully");
          break;
        }
        case HttpEventType.Response : {
          console.log(event.body);
        }
      }
    } );
    
  }
  selectForm(fm:formlist){
    this.selectedForm=fm;

  }
  addForm(){
    const form:formlist={
      //formNumber:'4',
      ftype: "uniqueness",
        photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
        dateofbirth: new Date('15-Dec-2003'),
        rating:3.665

    }
    //this.flist=[...this.flist,form];
    this.formService.addForms(form).subscribe((frm)=>this.flist=frm);

  }
  editForm(){
    const form:formlist={
      //formNumber:'4',
        ftype: "uniqueness",
        photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
        dateofbirth: new Date('12-May-2005'),
        rating:1.776

    }
    
  }


}
