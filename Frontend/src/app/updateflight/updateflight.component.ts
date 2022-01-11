import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { PasstokenService } from '../passtoken.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  constructor(private http:HttpClient,private authtoken:PasstokenService) { }
  url:string=""
  public display=true
  string:any

  ngOnInit(): void {
  }

  updateflight(data:any){
    
    this.display=false
    this.url ="http://localhost:8060/admin/updateflight"
    
    let tokenstr='Bearer '+ this.authtoken.token
    
    const headers=new HttpHeaders().set("Authorization",tokenstr)


    this.http.put(this.url,data,{responseType: 'text',headers}).subscribe(data1 => {
      this.string=data1
    });
  }


  }


