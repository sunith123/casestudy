import { Component, OnInit } from '@angular/core';
import { FlightDetails } from '../flight-details';
import { FlightdetailService } from '../flightdetail.service';
import { PasstokenService } from '../passtoken.service';

@Component({
  selector: 'app-flightdetail',
  templateUrl: './flightdetail.component.html',
  styleUrls: ['./flightdetail.component.css']
})
export class FlightdetailComponent implements OnInit {
  
  flight : FlightDetails[];
  public display=true;

  Data: any


  constructor(private flightdetailservice:FlightdetailService,private authtoken:PasstokenService) {
    this.flight=[ ]
   }

  ngOnInit(): void {
  }

  flightdetail(value:string){
    this.display=false
    this.flightdetailservice.Addflights(value,this.authtoken.token).subscribe(

      Data => {
        if (Data) {
          
          this.Data = Data;
        }         
     });


  }
}
