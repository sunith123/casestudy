import { Component, OnInit } from '@angular/core';
import { PasstokenuserService } from '../passtokenuser.service';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  url:any
  Data:any
  constructor(private booking:PasstokenuserService, private http:HttpClient) { }

  ngOnInit(): void {
    
  this.url="http://localhost:8087/payment/checkstatus/"+ this.booking.bookingno
  this.http.get(this.url).subscribe( (Data: any) => {
      this.Data = Data.totalPrice
 });

    
  }

}
