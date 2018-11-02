import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { Company } from 'src/app/model/Company';
import { UbicationService } from 'src/app/service/ubication.service';
import { Municipality } from 'src/app/model/Municipality';
import { User } from 'src/app/model/User';
import { CompanyUser } from 'src/app/model/CompanyUser';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  titles: Titulo[] = [
    {value: 'SR.', viewValue: 'SR.'},
    {value: 'SRA', viewValue: 'SRA.'},
    {value: 'LIC', viewValue: 'LIC.'},
    {value: 'ING', viewValue: 'ING.'},
    {value: 'ARQ', viewValue: 'ARQ.'}
  ];
  constructor(private companyService:CompanyService,private ubicationService:UbicationService) { }

  ngOnInit() {
    this.seeCompanyAll();
  }
  
  seeCompanyAll(){
    this.companyService.companyAllService().subscribe(
      res=>{
        var respues=JSON.parse(JSON.stringify(res))._body;
        if(respues!=""){
          this.companyList=JSON.parse(respues);
          //this.seeAllMunic();
        }
      },
      error=>console.log(error)
    );
  }
  newCompany(){
    this.hiddenNewCompany=false;
    this.nit="";
    this.companyTemp.nit="";
    this.nameCompany="";
    this.companyTemp.nameCompany="";
    this.companyTemp.companyUser=null;
    this.companyTemp.ubicationCompany=null;
  }
  cancelCompany(){
    this.hiddenNewCompany=true;
    this.seeCompanyAll();
  }
  saveCompany(){
    this.companyTemp.nit=this.nit;
    this.companyTemp.nameCompany=this.nameCompany;
    this.companyTemp.companyUser=null;
    this.companyTemp.ubicationCompany=null;
    this.companyService.companySaveService(this.companyTemp).subscribe(
      res=>{
        var respues=JSON.parse(JSON.stringify(res))._body;
        console.log(respues);
        if(respues!=""){          
          this.companyTemp.nit="";
          this.companyTemp.nameCompany="";
          this.companyTemp.companyUser=null;
          this.companyTemp.ubicationCompany=null;
          this.hiddenNewCompany=true;
          this.seeCompanyAll();
        }
      },
      error=>console.log(error)
    );
  }
  seeAllMunic(){
    this.ubicationService.ubicationAllMuniciService().subscribe(
      res=>{
        var respues=JSON.parse(JSON.stringify(res))._body;
        if(respues!=""){
          this.municipalityList=JSON.parse(respues);
          //this.municipality.name
        }
      },
      error=>console.log(error)
    );
  }
  setCompany(selectedValue){
    
    //this.companyTemp.companyId=selectedValue;
    this.companyList.forEach(company => {
      if(company.companyId==selectedValue){
        this.hiddenNewSolicitante=false;
        this.companyTemp=company;        
        this.userCompanyList=this.companyTemp.companyUser;
//        console.log("company select:"+JSON.stringify(this.userCompanyList));
        this.hiddenNewSolicitanteOpen=true;
        this.seeUserCompany();
      }
    });
  }
  seeUserCompany(){
    this.userCompany.user.titleUser+this.userCompany.user.name+this.userCompany.user.userId
  }
  newUserCompany(){
    this.hiddenNewSolicitanteOpen=false;
    this.hiddenNewSolicitante=true;
  }
  cancelCompanyUser(){
    this.selectedTitleUserCompany=''
    this.hiddenNewSolicitanteOpen=true;
    this.hiddenNewSolicitante=false;
  }
  saveCompanyUser(){
    this.userCompany.user.ubication=null;
    this.userCompany.company=null;
    this.userCompany.user.occupation=this.chargeUserComany;
    this.userCompany.user.titleUser=this.selectedTitleUserCompany;
    this.userCompany.user.name=this.nameUserCompany;
    this.userCompany.user.lastName=this.lastNameUserCompany;
    this.companyTemp.companyUser.push(this.userCompany);     
    console.log("saveUSer:"+JSON.stringify(this.companyTemp));
    this.companyService.companyUserSaveService(this.companyTemp).subscribe(
      res=>{
        var respues=JSON.parse(JSON.stringify(res))._body;
        console.log(respues);
        if(respues!=""){          
          this.companyTemp.nit="";
          this.companyTemp.nameCompany="";
          this.companyTemp.companyUser;
          this.companyTemp.ubicationCompany=null;
          this.hiddenNewCompany=true;
          this.hiddenNewSolicitanteOpen=true;
          this.hiddenNewSolicitante=false;
          this.seeCompanyAll();
        }
      },
      error=>console.log(error)
    );
  }

  name:string;
  selected = 'option2';
  selectedValue='Ninguna';
  selectedUserValue='0'
  companyList:Array<Company>=new Array<Company>();
  companyTemp:Company=new Company();
  hiddenNewCompany:boolean=true;
  nit:string;
  nameCompany:string;
  panelOpenState = false;
  municipalityList:Array<Municipality>=new Array<Municipality>();
  municipality:Municipality=new Municipality();
  ciPrestatario:string;
  ciPropietario:string;
  userCompanyList:Array<CompanyUser>=new Array<CompanyUser>();
  userCompany:CompanyUser=new CompanyUser();
  hiddenNewSolicitante:boolean=true;
  hiddenNewSolicitanteOpen:boolean=true;
  chargeUserComany:string;
  selectedTitleUserCompany:string;
  nameUserCompany:string;
  lastNameUserCompany:string;
}



export interface Food {
  value: string;
  viewValue: string;
}
export interface Titulo{
  value: string;
  viewValue: string;
}