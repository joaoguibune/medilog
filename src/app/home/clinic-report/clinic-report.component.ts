import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IClinicReportModel } from 'src/app/models/clinic-report.model';
import { HealthUnitService } from 'src/app/_services/health-unit.service';

const ELEMENT_DATA: IClinicReportModel[] = [
  
  

];

@Component({
  selector: 'medlog-clinic-report',
  templateUrl: './clinic-report.component.html',
  styleUrls: ['./clinic-report.component.scss']
})
export class ClinicReportComponent implements OnInit {

  constructor(private healthUnitService : HealthUnitService) { }

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
  
  filteredOptions: Observable<string[]>;
  matAutoComplete:string
  
  clinics:IClinicReportModel[];

  ngOnInit() {
    this.healthUnitService.getHealthUnits().subscribe(
      data => {
        this.healthUnits = data
        this.healthUnits.results.push({name:'Todas as Unidades', id:null},)        
        console.log(this.healthUnits)
      } 
    );
    this.selectedUnit = {name:'Todas as Unidades', id:null}
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
    this.clinics = [
      {clinic: "Unidade Botanico" ,qtd: 23, date: "19/02/2019 - 20:00", hours:"97:00h"},
      {clinic: "Unidade Agua Verde" ,qtd: 97, date: "19/02/2019 - 20:00", hours:"62:00h"},
      {clinic: "Unidade Centro" ,qtd: 5, date: "19/02/2019 - 20:00", hours:"07:00h"}
    ];
    this.cols = [
      { field: 'clinic', header: 'Unidade' },
      { field: 'qtd', header: 'Quantidade' },
      { field: 'date', header: 'Data/Hora' },
      { field: 'hours', header: 'Horas' }   
    ];
  }

  search(event) {
    this.results = this.healthUnits.results
}

 
  



}
