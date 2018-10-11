import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { UserAdmin } from '../model/UserAdmim';
import { Network } from '../model/Network';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Content-Type' : 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers, Access-Control-Allow-Methods, Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Access-Control-Allow-Credentials': true 
  });

  constructor(private http: Http) { }
  login(user: UserAdmin) {
    let url = Network.API_URL+"login";
    return this.http.post(url, user,{headers: this.headers})
  }
  phone(){
    let url = Network.API_URL+"p";
    return this.http.get(url);
  }
}
