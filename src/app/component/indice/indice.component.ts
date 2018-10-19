import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {

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
