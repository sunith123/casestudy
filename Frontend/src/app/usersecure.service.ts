import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersecureService {

  url:string=" "
  constructor(private http:HttpClient) { }

  generatetoken(req: any) {
    this.url="http://localhost:8088/user/authenticate"
    return this.http.post(this.url,req,{responseType: 'text'})
    
  }
}