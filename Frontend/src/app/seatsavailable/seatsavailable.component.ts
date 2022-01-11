import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PasstokenService } from '../passtoken.service';
import { SeatAvailable } from '../seat-available'
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-seatsavailable',
  templateUrl: './seatsavailable.component.html',
  styleUrls: ['./seatsavailable.component.css']
})
export class SeatsavailableComponent implements OnInit {
  Data:SeatAvailable[]
  token:any
  url:any

  constructor(private authtoken:PasstokenService,private http:HttpClient) { 
    this.Data=[]
  }

  ngOnInit(): void {
    this.token=this.authtoken.token
    
    let tokenstr='Bearer '+ this.token
    
    const headers=new HttpHeaders().set("Authorization",tokenstr)
    this.url ="http://localhost:8088/seatavailable"
    this.http.get(this.url,{headers}).subscribe((data1:any) => {
      
      this.Data=data1
    });
      

  }

}
