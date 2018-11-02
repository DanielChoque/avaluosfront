import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Network } from '../model/Network';

@Injectable({
  providedIn: 'root'
})
export class UbicationService {
  public headers = new Headers({
    'Content-Type' : 'application/json; charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  });
  constructor(private http: Http) { }
  ubicationAllMuniciService() {
    let url = Network.API_URL+"ubication/municipality";
    return this.http.get(url);
  }
  ubicationAllDepService() {
    let url = Network.API_URL+"ubication/municipality";
    return this.http.get(url);
  }
  ubicationAllProvService() {
    let url = Network.API_URL+"ubication/municipality";
    return this.http.get(url);
  }
}
