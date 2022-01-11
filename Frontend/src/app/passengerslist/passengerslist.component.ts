import { Component, OnInit } from '@angular/core';
import { PasstokenService } from '../passtoken.service';
import { HttpClient } from '@angular/common/http';
import { PassdataService } from '../passdata.service';
import { HttpHeaders } from '@angular/common/http';
import { UserDetails } from '../user-details';

@Component({
  selector: 'app-passengerslist',
  templateUrl: './passengerslist.component.html',
  styleUrls: ['./passengerslist.component.css']
})
export class PassengerslistComponent implements OnInit {
  public display=true
  Data:UserDetails[]
  token:any
  url:any
  constructor(private authtoken:PasstokenService,private http:HttpClient,public service:PassdataService) { 
    this.Data=[]
  }

  ngOnInit(): void {
  }

  flightdetail(data:any){
    this.display=false
    this.token=this.authtoken.token
    
    let tokenstr='Bearer '+ this.token
    
    const headers=new HttpHeaders().set("Authorization",tokenstr)
    this.url ="http://localhost:8088/flightusers/"+data
    this.http.get(this.url,{headers}).subscribe((data1:any) => {
      
      this.Data=data1
    });

  }
}
