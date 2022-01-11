import { Component, OnInit } from '@angular/core';
import { DeleteflightService } from '../deleteflight.service';
import { PasstokenService } from '../passtoken.service';


@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {

  data1:string=" "
  public display=true
  string: any;

  constructor(private deleteflightService:DeleteflightService,private authtoken:PasstokenService) { }

  ngOnInit(): void {
  }
  flightdelete(value:string){
    this.display=false
    this.deleteflightService.deleteflight(value,this.authtoken.token).subscribe(
      (data1:any)=>{

        this.string=data1
    });
}
}