import { HttpEventType } from '@angular/common/http';
import { Component, Inject, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA , MatDialog} from '@angular/material/dialog';
import { catchError, map, of, Subject, subscribeOn, Subscription } from 'rxjs';
import { formlist } from '../form';
import { FormsService } from '../services/forms.service';

@Component({
  selector: 'ajui-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() showit1:boolean=true;

  fl:formlist[]=[];
  selform!:formlist;
  fn='hanz zimmer';
  ln='Default';
  totalBytes=0;
  subscribe!:Subscription;
  error$=new Subject<String>;
  getError$=this.error$.asObservable();
  // getError$!:error$.
  forms$=this.formService.getForms$.pipe(
    catchError((err)=> {
      console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );
  ratingFilter=new FormControl()
  formsCount$=this.formService.getForms$.pipe(
    map((forms)=>forms.length)    
  )
  constructor(@Inject(MAT_DIALOG_DATA) data:any, private formService:FormsService, private dialog:MatDialog){
    this.fn=data.name;

  }
  
  ngOnInit():void{
     //this.flist= this.formService.getForms();
     // this.formService.getForms$.subscribe(forms=>{
    //   this.fl=forms;
    // })
    // this.subscribe=this.formService.getForms$.subscribe(forms=>{
    //   this.fl=forms;
    // })

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
  pfn(){
    this.ln=this.fn;
  }
  selectForm(f:formlist){
    this.selform=f;

  }
  addForm(){
    const form:formlist={
      formNumber:'4',
      ftype: "unique",
        photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
        dateofbirth: new Date('15-Dec-2003'),
        rating:3.445

    }
    //this.fl=[...this.fl,form];
    this.formService.addForms(form).subscribe((frm)=>this.fl=frm);

  }

  editForm(){
     const form:formlist={
        //  formNumber:'3',
         ftype: "uniqueness",
         photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
         dateofbirth: new Date('12-May-2005'),
         rating:1.776

     }
    this.formService.editForms(this.selform,form).subscribe((frm)=>this.fl=frm);
  }

  deleteForm(){
  //   const form:formlist={
  //     formNumber:'3',
  //     ftype: "uniqueness",
  //     photo: "https://themefisher.com/_next/image?url=https%3A%2F%2Fdemo.themefisher.com%2Fthumbnails%2Fagen.png&w=900&q=80",
  //     dateofbirth: new Date('12-May-2005'),
  //     rating:1.776

  // }
  this.formService.deleteForms(this.selform).subscribe((frm)=>this.fl=frm);
  }
  stopForm(){
    this.dialog.closeAll;
  }
  // ngOnDestroy(){
  //   if(this.subscribe){
  //     this.subscribe.unsubscribe();
  //   }
  // }

}
