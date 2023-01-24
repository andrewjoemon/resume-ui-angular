import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { formlist } from '../form';

@Component({
  selector: 'ajui-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FormListComponent implements OnInit,OnChanges, OnDestroy{
  @Input() forms:formlist[]=[];
  @Input() title:string=" ";
  @Output() selectedFormEvent=new EventEmitter<formlist>();
  constructor(){}
  ngOnDestroy(): void {
    console.log("on destroy is called");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']){
      this.title=changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void {
    
  }
  @ViewChild(NavbarComponent) navbarComponent!:NavbarComponent;
  selectForm(fm:formlist){
    this.selectedFormEvent.emit(fm);
  }

}
