import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IgniteService {

  private onInit = false;
  private isActive = false;
  private count = 10;
  private interval: any;
  constructor() { }

  initIgnite(): void {
    if (this.onInit) {
      this.count = 11;
    }
    this.onInit = true;
  }

  activeIgnite(active: boolean): void {
    this.isActive = active;
  }

  ignite(): Observable<any> {
    return new Observable((observer: any) => {
      if (this.isActive) {
        this.interval = setInterval(() => {
          if (this.onInit) {
            if (this.count < 1) {
              this.count = 1;
            }
            observer.next((--this.count).toString());
          }
        }, 1000);
      }
    });
  }

}
