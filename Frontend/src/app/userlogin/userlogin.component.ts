import { Component, OnInit } from '@angular/core';
import { PassdataService } from '../passdata.service';
import { Router } from '@angular/router';
import { UsersecureService } from '../usersecure.service';
import { PasstokenuserService } from '../passtokenuser.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private service:UsersecureService,private router:Router,private passtoken:PasstokenuserService,private passdata:PassdataService) { }
  token:string=""

  ngOnInit(): void {
  }

  // details(data:string){ 
  //   console.log(data)
  //   this.service.value=data
  //   this.router.navigate(["/viewupdate"])
  // }
  details(authreq:any){
    this.passdata.value=authreq
     this.service.generatetoken(authreq).subscribe(
      (data1:any)=>{
 
        this.token=data1
        this.passtoken.token=data1
        if(data1!==null){
          
          this.router.navigate(["/viewupdate"])
        }

        else { 
          
          this.router.navigate(["/adminfunc"])

        }
    });
    
  }

}
