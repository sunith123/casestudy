import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasstokenService {
  public token!: string;

  constructor() { }

}
