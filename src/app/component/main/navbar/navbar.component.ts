import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('user', '');
		localStorage.removeItem('user');
    localStorage.setItem('user', '');
    localStorage.removeItem('user');
		location.reload();		
  }

}
