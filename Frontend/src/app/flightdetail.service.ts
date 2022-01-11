import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FlightDetails } from './flight-details';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightdetailService {

  url:string=""
  constructor(private _http:HttpClient) { }

  Addflights(Id:string,token:any):Observable<FlightDetails[]>{
    let tokenstr='Bearer '+ token
    const headers=new HttpHeaders().set("Authorization",tokenstr)

    this.url="http://localhost:8060/admin/flight/"+Id
    return this._http.get<FlightDetails[]>(`${this.url}`,{headers});
  }
}

