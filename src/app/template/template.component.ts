import { Component, OnInit, Self } from '@angular/core';
import { FormsService } from '../form/services/forms.service';

@Component({
  selector: 'ajui-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  //providers:[FormsService]
})
export class TemplateComponent implements OnInit {
  tempname:String="sample1"
  constructor(  private formsService:FormsService) { }
  ngOnInit(): void {
    
  }

}
