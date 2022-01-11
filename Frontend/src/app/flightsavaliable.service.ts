import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FlightDetails} from './flight-details';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsavaliableService {
  url:string=""

  constructor(private http:HttpClient) { }

  flightsavaliable(token:any):Observable<FlightDetails[]>{
    let tokenstr='Bearer '+ token

    const headers=new HttpHeaders().set("Authorization",tokenstr)
    this.url="http://localhost:8060/admin/flightsavailable"
   return this.http.get<FlightDetails[]>(this.url,{headers});
    

}
}