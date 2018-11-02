import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  afuConfig = {
    multiple: true,
    uploadAPI: {
      url:"http://localhost:8080/uploadMultipleFiles"
    }
};

  constructor() { }

  ngOnInit() {
  }

}
