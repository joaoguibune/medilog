import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IClinicReportModel } from 'src/app/models/clinic-report.model';
import { HealthUnitService } from 'src/app/_services/health-unit.service';
import { HealthProfessionalsService } from 'src/app/_services/health-professionals.service';
import { IHourReportModel } from 'src/app/_models/hour-report.model';


@Component({
  selector: 'medlog-hours-report',
  templateUrl: './hours-report.component.html',
  styleUrls: ['./hours-report.component.scss']
})
export class HoursReportComponent implements OnInit {

  constructor(private healthUnitService : HealthUnitService, private healthProfessionalService:HealthProfessionalsService) { }

  myControl = new FormControl();
  results: any[];
  text: string;
  final:any;
  initial:any
  showTable:boolean = false;
  cols:any[];
  totalHours:number;
  healthUnits;
  selectedUnit;
  healthProfessionals;
  selectedProfessional;
  
  filteredOptions: Observable<string[]>;
  matAutoComplete:string
  
  report:IHourReportModel[];

  ngOnInit() {
    this.healthUnitService.getHealthUnits().subscribe(
      data => {
        this.healthUnits = data
        this.healthUnits.results.push({name:'Todas as Unidades', id:null},)       
        
      } 
    );
    this.healthProfessionalService.getHealthProfessionals().subscribe(
      data => {
        this.healthProfessionals = data
        this.healthProfessionals.results.push({name:'Todos os Médicos', user_type:null, email:null},)        
      
      } 
    );
    this.selectedUnit = {name:'Todas as Unidades', id:null}
    this.selectedProfessional = {name:'Todos os Médicos', user_type:null, email:null}
    var initialDate = new Date();    
    this.initial = initialDate;
    this.initial.setHours(0);
    this.initial.setMinutes(0);
    this.initial.setSeconds(0);
    var finalDate = new Date();
    this.final = finalDate;
    this.final.setHours(23);
    this.final.setMinutes(59);
    this.final.setSeconds(59)
    this.totalHours = 97+62+7;
    this.report = [
      {doctor:"Médico 01" , clinic: "Unidade Botanico", date: "19/02/2019", entry: "12:00", leave:"20:10", hours:"8h10m"},
      {doctor:"Médico 02",clinic: "Unidade Agua Verde" ,date: "19/02/2019", entry: "23:00", leave:"03:15", hours:"4h15m"},
      {doctor:"Médico 03", clinic: "Unidade Centro" ,date: "19/02/2019", entry: "06:00", leave:"06:30", hours:"0h30m"}
    ];
    this.cols = [
      { field: 'doctor', header: 'Médico' },
      { field: 'clinic', header: 'Unidade' },     
      { field: 'date', header: 'Data/Hora' },
      { field: 'entry', header: 'Entrada' },
      { field: 'leave', header: 'Saída' },
      { field: 'hours', header: 'Tempo' }   
    ];
  }

  search(event) {
    this.results = this.healthUnits.results
}

 

}
