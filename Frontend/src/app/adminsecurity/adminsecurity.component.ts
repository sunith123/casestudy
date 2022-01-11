import { Component, OnInit } from '@angular/core';
import { AdminsecureService } from '../adminsecure.service';
import { PasstokenService } from '../passtoken.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsecurity',
  templateUrl: './adminsecurity.component.html',
  styleUrls: ['./adminsecurity.component.css']
})
export class AdminsecurityComponent implements OnInit {
  stringvalue = "Authentication Failed"
  data1:any;
  token:string=""
  public display=true

  constructor(private service:AdminsecureService, private passtoken:PasstokenService, private router:Router) { }

  ngOnInit(): void {
  }

  getAccess(authreq:any){
    
     this.service.generatetoken(authreq).subscribe(
      (data1:any)=>{
        
        this.token=data1
        this.passtoken.token=data1
        if(data1!==null){
          this.display=true
          this.router.navigate(["/adminfunc"])
        }

        else { 
          this.display=false
          this.router.navigate(["/adminfunc"])

        }
    });
    
  }

 
}
