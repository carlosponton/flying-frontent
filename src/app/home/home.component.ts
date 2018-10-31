import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private planetas: any;
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getPlanets().subscribe(planets => {
      this.planetas = this.arrayFromObject(planets);
    });
  }

  arrayFromObject(obj: object): any {
    return Object.keys(obj).map((key ) => {
      obj[key].name = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();;
      return obj[key];
    });
  }
}
