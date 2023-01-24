import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialog} from '@angular/material/dialog';
import { formlist } from '../form/form';
import { FormsService } from '../form/services/forms.service';

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
  constructor(@Inject(MAT_DIALOG_DATA) data:any, private formService:FormsService, private dialog:MatDialog){
    this.fn=data.name;

  }
  ngOnInit():void{
     //this.flist= this.formService.getForms();
    this.formService.getForms().subscribe(forms=>{
      this.fl=forms;
    })
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
    this.fl=[...this.fl,form];
  }
  stopForm(){
    this.dialog.closeAll;
  }

}
