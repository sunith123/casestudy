import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
import { HttpClient } from '@angular/common/http';
import { PassdataService } from '../passdata.service';
import { PasstokenuserService } from '../passtokenuser.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-userbookeddetails',
  templateUrl: './userbookeddetails.component.html',
  styleUrls: ['./userbookeddetails.component.css']
})
export class UserbookeddetailsComponent implements OnInit {
 url:any
 Data:any
 user:any
token:any
string!: UserDetails[];
d:any


  constructor(private http:HttpClient,private service:PassdataService,private passservice:PasstokenuserService) {
  }

  ngOnInit(): void {

    this.user=this.service.value
    this.token=this.passservice.token

    let tokenstr='Bearer '+ this.token

    const headers=new HttpHeaders().set("Authorization",tokenstr)
 
    this.url ="http://localhost:8088/user/userdetails/"+this.user.username
    this.http.get<UserDetails[]>(this.url,{headers}).subscribe( Data => {
      if (Data) {
   
        this.d=Data 
        this.passservice.bookingno= this.d.bookingid

      }         
   });
}
}