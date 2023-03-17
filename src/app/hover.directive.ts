import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ajuiHover]'
})
export class HoverDirective implements OnInit {

  @Input() ajuiHover:string="red";

  constructor(private element:ElementRef, private render:Renderer2) { }

  ngOnInit(): void {
    //this.element.nativeElement.style.color=this.color;
    this.render.setStyle(this.element.nativeElement,'color',this.ajuiHover);   

    
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.render.setStyle(this.element.nativeElement,'backgroundColor',this.ajuiHover);   

  }

  @HostListener('mouseleave') onMouseLeave(){
    this.render.setStyle(this.element.nativeElement,'backgroundColor','beige');
  }


}
