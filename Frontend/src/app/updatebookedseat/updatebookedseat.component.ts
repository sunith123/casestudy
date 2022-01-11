import { Component, OnInit } from '@angular/core';
import { PassdataService } from '../passdata.service';
import { UserDetails } from '../user-details';
import { HttpClient } from '@angular/common/http';
import { PasstokenuserService } from '../passtokenuser.service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-updatebookedseat',
  templateUrl: './updatebookedseat.component.html',
  styleUrls: ['./updatebookedseat.component.css']
})
export class UpdatebookedseatComponent implements OnInit {
  usernames:any
  url:any
  Data:any
  public display=true
  string:any
 token:any

  constructor(public service:PassdataService,private http:HttpClient,private passservice:PasstokenuserService) { }

  ngOnInit(): void {
    this.usernames=this.service.value
    this.token=this.passservice.token
    
    let tokenstr='Bearer '+ this.token
    
    const headers=new HttpHeaders().set("Authorization",tokenstr)
    
    this.url ="http://localhost:8088/user/userdetails/"+this.usernames.username
    this.http.get<UserDetails[]>(this.url,{headers}).subscribe( Data => {
      if (Data) {
        
        this.Data = Data;
      }         
   });


  }
  update(data:any){
    this.display=false
    
    this.token=this.passservice.token

    let tokenstr='Bearer '+ this.token
    const headers=new HttpHeaders().set("Authorization",tokenstr)
    this.url ="http://localhost:8088/user/updateuser"
    this.http.put(this.url,data,{responseType: 'text',headers}).subscribe(data1 => {
      this.string=data1
    });

  }


}
