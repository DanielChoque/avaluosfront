import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { UserAdmin } from '../../model/UserAdmim';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userAdmin:UserAdmin=new UserAdmin();

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  login(){
    this.userAdmin.nameAdmin="dangiel";
    this.userAdmin.userAdminId=1;
    this.userAdmin.password="123";

    this.loginService.phone().subscribe(
      res=>{
        var respu=JSON.parse(JSON.parse(JSON.stringify(res))._body);
        console.log(respu);
      },
      error=>console.log(error)
    );
    console.log("daniel hoal");
  }

}
