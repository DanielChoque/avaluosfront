import { Department } from "./Department";

export class Province{
    provinceId:number;
    name:string;
    department:Department=new Department();
}