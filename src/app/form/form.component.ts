import { Component, DoCheck, OnInit, ViewChild,AfterViewInit, AfterViewChecked, ViewChildren, QueryList, SkipSelf, Self } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { form, formlist } from './form';
import { FormsService } from './services/forms.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { FormListComponent } from './form-list/form-list.component';

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
  toggle() {
    this.showit = !this.showit;
    //this.showit == true ? this.formstart = "Stop Form" : this.formstart = "Show Form";
    if (this.showit==false){
    this.dialogref.open(PopupComponent,{
      data:{
        name:'JK'
      }
    });
    }
    else{
      this.dialogref.closeAll;
    }
  }
  fm: form = {
    name: "ikka",
    age: 24
  };
  flist: formlist[] = [];
  selectedForm! : formlist;

  constructor(  private formService:FormsService, private dialogref:MatDialog){}
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
    //this.flist= this.formService.getForms();
    this.formService.getForms().subscribe(forms=>{
      this.flist=forms;
    })
    
  }
  selectForm(fm:formlist){
    this.selectedForm=fm;

  }
  addForm(){
    const form:formlist={
      formNumber:'4',
      ftype: "unique",
        photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
        dateofbirth: new Date('15-Dec-2003'),
        rating:3.445

    }
    this.flist=[...this.flist,form];
  }


}
