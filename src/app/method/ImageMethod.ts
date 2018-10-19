import { ElementRef } from "@angular/core";

export class ImageMethod{
  constructor(private elem:ElementRef) { }
  showInfo(){
    let file = (<HTMLInputElement>document.getElementById("image-upload2")).value;
    console.log("file:"+file);
    let files = this.elem.nativeElement.querySelector('#image-upload2').files;
    var f = files[0];     
    if (files && f) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(f);
    }        
  }
  _handleReaderLoaded(readerEvt) {
  var binaryString = readerEvt.target.result;      
  this.base64textString= btoa(binaryString);
  console.log("btoa:"+btoa(binaryString));
  }
  base64textString: string;
  anime(){
    console.log("entro");
  }
}