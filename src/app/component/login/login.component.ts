import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { userAdmin } from '../../model/UserAdmim';
import { Network } from '../../model/Network';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  urlImage=Network.IMAGE_URL;
  
  userAdmin:userAdmin=new userAdmin();
  userAdminTemp:userAdmin=new userAdmin();
  name:string="daniel";
  password:string="123";
  hiddenLogin:boolean=false;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
    console.log(localStorage.getItem('user'))
    if(localStorage.getItem('user') != null) {
      this.hiddenLogin=true;
    }
    
  }

  
  login(){
    this.userAdmin.nameAdmin=this.name;
    this.userAdmin.password=this.password;

    this.loginService.login(this.userAdmin).subscribe(
      res=>{
        var respues=JSON.parse(JSON.stringify(res))._body;
//this.userAdminTemp=JSON.parse(JSON.parse(JSON.stringify(res))._body);
        console.log(respues);
        if(respues!=""){
          this.hiddenLogin=true;
          localStorage.setItem('user', respues);
          console.log("entro if");
          location.reload();
        }
      },
      error=>{
        console.log(error);
        console.log("");
      }
    );
  }
  phone(){
    this.userAdmin.nameAdmin="dangiel";
    this.userAdmin.userAdminId=2;
    this.userAdmin.password="123";

    this.loginService.phone().subscribe(
      res=>{
       var pho=JSON.parse(JSON.parse(JSON.stringify(res))._body);
        console.log(pho);
      },
      error=>console.log(error)
    );
    console.log("daniel hoal");
  }
  salir(){
    
  }
}
