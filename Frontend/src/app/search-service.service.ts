import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FlightDetails} from './flight-details';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SearchServiceService {
url:string=""
constructor(private _http:HttpClient) { }

getflights(dep:string,des:string,date:string):Observable<FlightDetails[]>{
  this.url="http://localhost:8060/flightdetails/"+ dep+"/"+ des+"/"+date;
  return this._http.get<FlightDetails[]>(`${this.url}`);

  }
}
