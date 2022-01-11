import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteflightService {
  url:string=""

  constructor(private _http:HttpClient) { }

  deleteflight(Id:string,token:any){
    let tokenstr='Bearer '+ token
    const headers=new HttpHeaders().set("Authorization",tokenstr)

    this.url="http://localhost:8060/admin/deleteflight/"+Id
    return this._http.delete(this.url,{responseType: 'text',headers});
  }
  }

