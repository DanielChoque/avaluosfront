import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { userAdmin } from '../model/UserAdmim';
import { Network } from '../model/Network';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public headers = new Headers({
    'Content-Type' : 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  });

  constructor(private http: Http) { }
  login(user: userAdmin) {
    let url = Network.API_URL+"login";
    return this.http.post(url, user,{headers: this.headers})
  }
  phone(){
    let url = Network.API_URL+"p";
    return this.http.get(url);
  }
}
