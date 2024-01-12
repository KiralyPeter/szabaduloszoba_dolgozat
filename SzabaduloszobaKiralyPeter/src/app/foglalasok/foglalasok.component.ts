import { Component } from '@angular/core';
import {FOGLALASOK_URL} from '../shared/constants/urls'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent {

  constructor(private http:HttpClient){}

  // getAll(): Observable<Foglalas>

}
