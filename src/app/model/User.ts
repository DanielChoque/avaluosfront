import { Phone } from "./Phone";
import { Ubication } from "./Ubication";

export class User {
    userId:number;
    name:string;
    lastName:string;
    ci:string;
    typeUser:string;
    phones:Array<Phone>=new Array<Phone>();
    ubication:Ubication=new Ubication();
    titleUser:string;
    occupation:string;
}