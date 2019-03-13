import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IHealthUnit } from '../_models/health-unit.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthUnitService {

  constructor(private http: HttpClient) { }

 healthUnits:any[]

  public getHealthUnits():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl + 'health-units/').pipe(
      map(response => this.healthUnits = response));
  }
  
}
