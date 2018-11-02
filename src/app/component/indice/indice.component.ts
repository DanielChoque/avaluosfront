import { Component, OnInit } from '@angular/core';
import { userAdmin } from 'src/app/model/UserAdmim';
import { Phone } from 'src/app/model/Phone';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {
  footerPage:string;
  headerPage:string;
  constructor() { }

  ngOnInit() {
    this.setFooterHeader();     
  }
  logout(){
    localStorage.setItem('user', '');
		localStorage.removeItem('user');
    localStorage.setItem('user', '');
    localStorage.removeItem('user');
		location.reload();		
  }
  setFooterHeader(){
    if(localStorage.getItem('user') != null) {    
      this.userAdminTemp=JSON.parse(localStorage.getItem('user'));      
      var phones:Array<Phone>=new Array<Phone>();
      phones=this.userAdminTemp.userAvaluador.phones;
      let phone:string="";
      phones.forEach(element => {
          var typeP=element.typePhone
          if(typeP=="Home")typeP="TEL.";
          else typeP="CEL.";
          phone=phone+typeP+" "+element.numberPhone +" ";
         // console.log("phone:" + phone)
        });
      this.headerPage=this.userAdminTemp.userAvaluador.titleUser+" "+this.userAdminTemp.userAvaluador.name+" "+this.userAdminTemp.userAvaluador.lastName 
      this.footerPage="OFICINA: "+this.userAdminTemp.userAvaluador.ubication.municipality.name+" "+ this.userAdminTemp.userAvaluador.ubication.tipoDireccion+" "+this.userAdminTemp.userAvaluador.ubication.direccion+" N°"+this.userAdminTemp.userAvaluador.ubication.numero+" "+this.userAdminTemp.userAvaluador.ubication.adicionales+ " " +phone
    }
  }
  userAdminTemp:userAdmin=new userAdmin();
}
