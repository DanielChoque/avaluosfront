import { Injectable } from '@angular/core';
import { Http ,Headers} from '../../../node_modules/@angular/http';
import { Network } from '../model/Network';
import { Avaluo } from '../model/Avaluo';

@Injectable({
  providedIn: 'root'
})
export class AvaluoService {
  public headers = new Headers({
    'Content-Type' : 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  });

  constructor(private http: Http) { }
  createAvaluo(ava: Avaluo) {
    let url = Network.API_URL+"avaluo/create";
    return this.http.post(url, ava,{headers: this.headers})
  }
}
