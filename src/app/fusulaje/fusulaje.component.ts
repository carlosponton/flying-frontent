import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';
import {IgniteService} from '../ignite.service';

@Component({
  selector: 'app-fusulaje',
  templateUrl: './fusulaje.component.html',
  styleUrls: ['./fusulaje.component.css']
})
export class FusulajeComponent implements OnInit {

  private planeta = {planeta: 'X', degrees: 'Y', img: ''};
  constructor(private route: ActivatedRoute, private rest: RestService, private ignite: IgniteService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params.planet) {
        this.ignite.activeIgnite(true);
        this.rest.getPlanet(params.planet).subscribe(planet => {
          this.planeta = planet;
          this.planeta.planeta = params.planet.charAt(0).toUpperCase() + params.planet.slice(1).toLowerCase();
        });
      } else {
        this.ignite.activeIgnite(false);
      }
    });
  }

}
