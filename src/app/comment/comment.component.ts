import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';
import { Comments } from './comment';
import { CommentService } from './comment.service';

@Component({
  selector: 'ajui-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  cs2:Comments[]=[];  //method1

  cs1$=this.router.data.pipe(        //method2
    pluck('comments')
  )  
  constructor(private commentService:CommentService, private router:ActivatedRoute){}
  ngOnInit(): void {
    // this.router.data.subscribe((data)=>console.log(data['comments']));
    this.router.data.subscribe((data)=>{
      this.cs2=data['comments'];
    })
  }
  cs$=this.commentService.getComments();  //method3

  

}
