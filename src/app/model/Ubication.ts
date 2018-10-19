import { Municipality } from "./Municipality";

export class Ubication{
    ubicationId:number;
    zona:string;
    urbanizacion:string;
    tipoDireccion:string;
    direccion:string;
    numero:string;
    adicionales:string;
    manzana:string;
    lote:string;
    municipality:Municipality=new Municipality();
}