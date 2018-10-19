import { User } from "./User";
import { Ubication } from "./Ubication";

export class Company {
    companyId:number
    nameCompany:string
    nit:string
    companyUser:Array<User> =new Array<User>()
    ubicationCompany:Ubication=new Ubication();
}