import { Component, OnInit } from '@angular/core';
import { FlightDetails } from '../flight-details';
import { SearchServiceService } from '../search-service.service';
import { BookidsenderService } from '../bookidsender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  flightModel= new FlightDetails("Kochi","Bangalore","","",0);
  flight : FlightDetails[];
  public display=true;
  public bookid!: string;
  constructor(private searchservice:SearchServiceService, private bookidsender:BookidsenderService,private router:Router) { this.flight=[] }
  

  onsubmit(){
    this.display=false;

    this.searchservice.getflights(this.flightModel.departure,this.flightModel.destination,this.flightModel.date).subscribe((data:FlightDetails[])=>{

      this.flight=data;
    });
  }
  handleChange(bookid:string){
    this.bookidsender.variable1=bookid
    
  }
    


}


