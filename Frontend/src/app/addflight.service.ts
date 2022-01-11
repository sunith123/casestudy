import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { FlightDetails } from './flight-details';




@Injectable({
  providedIn: 'root'
})
export class AddflightService {
  details:any;
  url:string=""

  constructor(private _http:HttpClient) { }

  Addflights(details:FlightDetails,token:any){
    let tokenstr='Bearer '+ token
    const headers=new HttpHeaders().set("Authorization",tokenstr)
  
    this.url="http://localhost:8060/admin/addflight"
    return this._http.post(this.url,details,{responseType: 'text',headers});
  }
}
