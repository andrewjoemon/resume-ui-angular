import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'ajui-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent {
id:number =0;
//id$!:Observable<number>;
// id$ = this.router.params.pipe(
//   map((params)=>params['id'])
// )
id$ = this.router.paramMap.pipe(
  map((params)=>params.get('id'))
)
constructor(private router:ActivatedRoute){ 

}
ngOnInit():void{
//this.router.params.subscribe((params)=>{this.id=params['id']});
// this.id=this.router.snapshot.params['id'];
// this.id$=this.router.params.pipe(
//   map((params)=>params['id'])
// )

}
}
