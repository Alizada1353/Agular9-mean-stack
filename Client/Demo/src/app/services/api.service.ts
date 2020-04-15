import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }


  login(formData){
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "1a2b3c";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:3000/login", formData, httpOptions);
  }

  setUser(formData) {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : "1a2b3c";
    let httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': token }) };
    return this._http.post("http://localhost:3000/signup", formData, httpOptions);
  }
}
