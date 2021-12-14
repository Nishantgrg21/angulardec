import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  

  constructor(private http: HttpClient) { }

  public url = "https://reqres.in/api/users";

  getRequest() {
    return this.http.get(this.url);
  }
   

  postRequest(body:any){
    return this.http.post('https://reqres.in/api/users',body);
  }
 

}
