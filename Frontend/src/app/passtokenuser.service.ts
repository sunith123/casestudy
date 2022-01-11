import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasstokenuserService {
  public token!: string;
  public bookingno!:any;
  

  constructor() { }
}
