import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private endpoint = 'https://flying-tresastronautas.herokuapp.com/';
  constructor(private http: HttpClient) { }

  getPlanet(planet: string): Observable<any> {
    return this.http.get(this.endpoint + 'planetas/' + planet).pipe(
      map(this.extractData));
  }

  getPlanets(): Observable<any> {
    return this.http.get(this.endpoint + 'planetas').pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
