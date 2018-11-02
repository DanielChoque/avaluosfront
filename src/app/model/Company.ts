import { Ubication } from "./Ubication";
import { CompanyUser } from "./CompanyUser";

export class Company {
    companyId:number
    nameCompany:string
    nit:string
    companyUser:Array<CompanyUser> =new Array<CompanyUser>()
    ubicationCompany:Ubication=new Ubication();
}