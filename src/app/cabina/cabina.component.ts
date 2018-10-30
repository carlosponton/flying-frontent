import { Component, OnInit } from '@angular/core';
import { IgniteService } from '../ignite.service';

@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})
export class CabinaComponent implements OnInit {

  private count = 10;
  constructor(private igniteService: IgniteService) { }

  ngOnInit() {
    this.igniteService.ignite().subscribe((count: number) => {
      this.count =  count;
    });
  }

}
