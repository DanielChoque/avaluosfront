import { Component, OnInit ,ElementRef} from '@angular/core';
import { Avaluo } from '../../../model/Avaluo';
import { Image } from '../../../model/Image';
import { AvaluoService } from '../../../service/avaluo.service';
import { userAdmin } from '../../../model/UserAdmim';
import { User } from 'src/app/model/User';
import { Company } from 'src/app/model/Company';
import { AvaluoImages } from 'src/app/model/AvaluoImages';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private elem:ElementRef,private avaluoService:AvaluoService) { }

  ngOnInit() {
  }
  nombre() {
   console.log("dasdsa");
   let file = this.elem.nativeElement.querySelector('#image-upload2').files;
    console.log("Files2: ", file); 
    this.setImagePrincipal2(file);
    var f = file[0];
    var dD=f.getAsBinary();
    var url = file;
    console.log("f:"+f+" dD"+url)
    this.setImagePrincipal2(f);
  }
  fullPhoto(){
    
  }
  llenar(){
    this.typesOfShoes=[];
    if(this.numberImage>0){
      for(let v=0;v<this.numberImage;v++){
        this.typesOfShoes[v]=""+v;
        console.log("v:"+v)
      }
    }
  }
  /*funcion de pruebas */
  showInfo(){
   /* let cant=this.numberImage;
    for(var i=0;i<cant;i++){
      var df:string=""+i;
      let files = this.elem.nativeElement.querySelector('#image-upload'+df).files;
      var f = files[0];
      console.log("file:"+f.name);
    }*/
    let file = (<HTMLInputElement>document.getElementById("image-upload2")).value;
    console.log("file:"+file);
    this.setImagePrincipal(file);
    var d:string=""+this.numberImageTemp;
    let files = this.elem.nativeElement.querySelector('#image-upload'+d).files;
    var f = files[0];
    //var s=this.getBase64(f);

    if (files && f) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(f);
    }
   // console.log("files:"+f);
  }
  /*funcion para el coontador numero de imagenes*/ 
  cont(link:number):number{
    var g:number;
    g=Number(link);
    g=g+1;
    return g;
  }

  setImagePrincipal(data:string){
    this.stringImage=JSON.stringify(data);
    console.log("stringImage"+this.stringImage);
    this.stringImage=this.stringImage.replace(/['"]+/g, '');
    console.log("stringImage: "+this.stringImage);
    this.nombre(); 
  }
  setImagePrincipal2(data:string){
    this.stringImage=JSON.stringify(data);
    console.log("stringImage"+this.stringImage);
    this.stringImage=this.stringImage.replace(/['"]+/g, '');
    console.log("stringImage: "+this.stringImage); 
  }
  _handleReaderLoaded(readerEvt){
    var binaryString = readerEvt.target.result;
   // console.log("binaryString:"+binaryString);
    this.base64textString= btoa(binaryString);
    this.setImageString(this.base64textString);
    //console.log("btoa:"+btoa(binaryString));    
   }
//este metodo solo es de referencia
  updatePhotos(){
    this.avaluoTemp=new Avaluo();
    this.avaluoImages=new  Array<AvaluoImages>();
    this.avaluoImage=new AvaluoImages()
    //this.avaluoTemp.avaluoId=1;
    this.imageTempp.name="image.jpg";
    this.imageTempp.observation="create 2018 modyfi 2019";
    this.imageTempp.type="Principal";
    this.avaluoImage.image=this.imageTempp
    this.avaluoImages.push(this.avaluoImage);
    this.avaluoImages.push(this.avaluoImage);
    this.avaluoTemp.avaluoImages=this.avaluoImages; 
    this.userAdminTemp=JSON.parse(localStorage.getItem('user')); 
    this.avaluoTemp.userAvaluador=this.userAdminTemp.userAvaluador;    
    console.log("avaluoTemp:"+JSON.stringify(this.avaluoTemp));
    this.avaluoTemp.company=null;
    this.avaluoTemp.letter=null;
    //this.avaluoTemp.avaluoImages=null;
    this.avaluoService.createAvaluo(this.avaluoTemp).subscribe(
      res=>{
       var pho=JSON.parse(JSON.stringify(res))._body;
        console.log("resp:"+pho);
      },
      error=>console.log(error)
    );
  }
  crearAvaluo(){
    this.avaluoTemp=new Avaluo();
    this.avaluoImages=new  Array<AvaluoImages>();
    this.avaluoImage=new AvaluoImages(); 
    this.userAdminTemp=JSON.parse(localStorage.getItem('user'));
    console.log("user local:");
    this.avaluoTemp.userAvaluador=this.userAdminTemp.userAvaluador;    
   // console.log("daniel");
    this.showImage();
  }
  showImage(){
    
    let files = this.elem.nativeElement.querySelector('#image-upload2').files;
    var f = files[0];
    this.imageTempp.name=f.name;
    this.imageTempp.observation=""+f.name+"::"+f.lastModifiedDate;
    this.imageTempp.type="Secundario";
    console.log("image: "+JSON.stringify(this.imageTempp));
    if (files && f) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      let d=reader.readAsBinaryString(f);
      console.log("d:"+this.base64textString);
    }
  }
  setImageString(image64:string){
    this.imageTempp.name=image64;
    console.log("Image64: "+JSON.stringify(this.imageTempp));
    this.avaluoImage.image=this.imageTempp;
    this.avaluoImages.push(this.avaluoImage);
    this.avaluoTemp.avaluoImages=this.avaluoImages;
    this.avaluoTemp.userAvaluador=this.userAdminTemp.userAvaluador;
    this.avaluoTemp.company=null;
    this.avaluoTemp.letter=null;
    this.avaluoService.createAvaluo(this.avaluoTemp).subscribe(
      res=>{
       var pho=JSON.parse(JSON.stringify(res))._body;
        console.log("resp:"+pho);
      },
      error=>console.log(error)
    );
  }

  userAvaluador:User=new User();
  avaluoImages:Array<AvaluoImages>;
  avaluoImage:AvaluoImages;
  company:Company=new Company();
  typesOfShoes: string[]=[];
  numberImage:number=8;
  base64textString: string;
  avaluoTemp:Avaluo;
  imagesTemp:Array<Image>=new Array<Image>();
  userAdminTemp:userAdmin=new userAdmin();
  imageTempp:Image=new Image();
  stringImage:string;
  numberImageTemp:number=2;  
}
