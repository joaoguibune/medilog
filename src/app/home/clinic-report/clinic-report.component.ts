import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IClinicReportModel } from 'src/app/models/clinic-report.model';

const ELEMENT_DATA: IClinicReportModel[] = [
  
  

];

@Component({
  selector: 'medlog-clinic-report',
  templateUrl: './clinic-report.component.html',
  styleUrls: ['./clinic-report.component.scss']
})
export class ClinicReportComponent implements OnInit {

  constructor() { }

  myControl = new FormControl();
  results: string[];
  text: string;
  final:any;
  initial:any
  showTable:boolean = false;
  cols:any[];
  totalHours:number;
  
  filteredOptions: Observable<string[]>;
  matAutoComplete:string
  
  clinics:IClinicReportModel[];

  ngOnInit() {
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
    this.results = ['Todas as Unidades', 'Unidade 1', 'Unidade 2','Unidade 3','Unidade 4']
}

 
  



}
