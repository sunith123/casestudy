import { Component, OnInit } from '@angular/core';
import { FlightsavaliableService } from '../flightsavaliable.service';
import { FlightDetails } from '../flight-details';
import { PasstokenService } from '../passtoken.service';

@Component({
  selector: 'app-flightsavaliable',
  templateUrl: './flightsavaliable.component.html',
  styleUrls: ['./flightsavaliable.component.css']
})
export class FlightsavaliableComponent implements OnInit {
  flight : FlightDetails[];

  constructor(private flightavaliableService:FlightsavaliableService, private authtoken:PasstokenService) { 
    this.flight=[]
  }

  ngOnInit(): void {
    this.flightavaliableService.flightsavaliable(this.authtoken.token).subscribe((data:FlightDetails[])=>{
      
      this.flight=data;
    });

  }

}
