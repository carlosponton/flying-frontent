import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-fusulaje',
  templateUrl: './fusulaje.component.html',
  styleUrls: ['./fusulaje.component.css']
})
export class FusulajeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rest: RestService) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.rest.getPlanet(params.planet).subscribe(planet => {
        console.log(planet);
      });
    });
  }

}
