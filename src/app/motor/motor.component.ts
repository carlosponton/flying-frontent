import { Component } from '@angular/core';
import { IgniteService } from '../ignite.service';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent {

  constructor(private igniteService: IgniteService) { }

  ignite() {
    this.igniteService.initIgnite();
  }

}
