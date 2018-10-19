import { Phone } from "./Phone";
import { Ubication } from "./Ubication";

export class User {
    idUser:number;
    name:string;
    lastName:string;
    ci:string;
    typeUser:string;
    phones:Array<Phone>=new Array<Phone>();
    ubication:Ubication=new Ubication();
}