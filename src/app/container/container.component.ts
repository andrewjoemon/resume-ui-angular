import { AfterContentInit, Component, ContentChild, Host, OnInit } from '@angular/core';
import { FormsService } from '../form/services/forms.service';
import { TemplateComponent } from '../template/template.component';

@Component({
  selector: 'ajui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers:[FormsService]
})
export class ContainerComponent implements OnInit,AfterContentInit {
  @ContentChild(TemplateComponent) temp! : TemplateComponent 
  constructor(@Host() private formService:FormsService){ }
  ngAfterContentInit(): void {
    console.log(this.temp);
    this.temp.tempname="Container Name";
  }

  ngOnInit(): void {
    
  }
}
