import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookidsenderService } from '../bookidsender.service';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.css']
})
export class UsersigninComponent implements OnInit {



 
  url:string=""
  public display=true
  string:any

  constructor(private http:HttpClient,public service:BookidsenderService) { }

  ngOnInit(): void {
    console.log(this.service.variable1)
  }

  Adduser(data:any){

    this.url="http://localhost:8088/user/adduser"
    this.http.post(this.url,data,{responseType:'text'}).subscribe(data1 =>{
      if(data1!="Seats Not Avaliable"){
        this.display=false
        this.string=data1
      }
      else{
        this.display=false
        this.string="Seats Not Avaliable"
      }
    })

    

  }

}
