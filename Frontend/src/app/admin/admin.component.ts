import { Component, OnInit } from '@angular/core';
import { AddflightService } from '../addflight.service';
import { FlightDetails } from '../flight-details';
import { PasstokenService } from '../passtoken.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  string: any
  addflight:string=" "
  public display=true
  data1:string=" "
  

  constructor(private addFlightService:AddflightService,private authtoken:PasstokenService) { }

  ngOnInit(): void {
  }
  Addflight(data:any){
    this.display=false;
    
    this.addFlightService.Addflights(data,this.authtoken.token).subscribe(

       (data1:any)=>{
       
      
      this.string=data1
    });


  }

}
