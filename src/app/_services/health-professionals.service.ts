import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHealthProfessional } from '../_models/health-professional.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthProfessionalsService {

  constructor(private http: HttpClient) { }

  healthProfessionals:any[];
 
   public getHealthProfessionals():Observable<any[]>{
     return this.http.get<any[]>(environment.apiUrl + 'health-professionals/').pipe(
       map(response => this.healthProfessionals = response));
   }
}
