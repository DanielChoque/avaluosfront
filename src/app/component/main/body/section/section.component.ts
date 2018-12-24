import { Component, OnInit } from '@angular/core';
import { Network } from 'src/app/model/Network';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  urlImage=Network.IMAGE_URL;

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
