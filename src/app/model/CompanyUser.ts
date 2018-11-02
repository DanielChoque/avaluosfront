import { Company } from "./Company";
import { User } from "./User";

export class CompanyUser {
    companyUserId:number;
    company:Company=new Company();
    user:User=new User();
}