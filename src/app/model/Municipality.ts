import { Province } from "./Province";

export class Municipality{
    municipalityId:number;
    name:string;
    province:Province=new Province();
}