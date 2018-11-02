import { User } from "./User";
import { Company } from "./Company";
import { Letter } from "./Letter";
import { AvaluoImages } from "./AvaluoImages";

export class Avaluo {
    avaluoId:number;
    userAvaluador:User=new User();
    avaluoImages:Array<AvaluoImages>=new Array<AvaluoImages>();;
    company:Company=new Company()
    userCompany:User=new User();
    letter:Letter=new Letter();
    userPrestatario:User = new User();
    userPropietario:User = new User();
}