import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HealthUnitService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  public getHealthUnits(){
    return this.http.get(environment.apiUrl + 'health-units/').pipe(
      map(this.extractData));
  }
  
}
