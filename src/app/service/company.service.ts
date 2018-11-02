import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Network } from '../model/Network';
import { Company } from '../model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public headers = new Headers({
    'Content-Type' : 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  });
  constructor(private http: Http) { }
  companyAllService() {
    let url = Network.API_URL+"company/all";
    return this.http.get(url);
  }
  companySaveService(company:Company){
    let url = Network.API_URL+"company/create";
    return this.http.post(url, company,{headers: this.headers})
  }
  companyUserSaveService(company:Company){
    let url = Network.API_URL+"company/create/companyuser";
    return this.http.post(url, company,{headers: this.headers})
  }
}
