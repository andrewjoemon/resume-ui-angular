import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ajui-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title:string="navbar";
  constructor(){}
  ngOnInit(): void {
  }


}
