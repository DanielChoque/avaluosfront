import { User } from "./User";

export class Letter{
    letterId:number;
    ref:string;
    body:string;
    userSolicitante:User = new User();
    userPropietario:User = new User();
}