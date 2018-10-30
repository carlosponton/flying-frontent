import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IgniteService {

  private onInit = false;
  private count = 10;
  private interval: any;
  constructor() { }

  initIgnite() {
    this.count = 10;
    this.onInit = true;
  }

  ignite() {
    return new Observable((observer: any) => {
      this.interval = setInterval(() => {
        if (this.onInit) {
          if (this.count < 0) {
            this.count = 0;
          }
          observer.next((this.count--).toString());
        }
      }, 1000);
    });
  }

}
