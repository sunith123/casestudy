import { Component, OnInit } from '@angular/core';
import { PasstokenService } from '../passtoken.service';
import { HttpClient } from '@angular/common/http';
import { PassdataService } from '../passdata.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-addseatavailability',
  templateUrl: './addseatavailability.component.html',
  styleUrls: ['./addseatavailability.component.css']
})
export class AddseatavailabilityComponent implements OnInit {
  public display=true
  string:any
  token:any
  url:any

  constructor(private authtoken:PasstokenService,private http:HttpClient,public service:PassdataService) { }

  ngOnInit(): void {
  }

  Addflightseat(data:any){
    this.display=false
    this.token=this.authtoken.token
  
    let tokenstr='Bearer '+ this.token
    
    const headers=new HttpHeaders().set("Authorization",tokenstr)
    this.url ="http://localhost:8088/addvacancy"
    this.http.post(this.url,data,{responseType: 'text',headers}).subscribe(data1 => {
      
      this.string=data1
    });

  }
}
