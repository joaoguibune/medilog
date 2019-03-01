import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IClinicReportModel } from 'src/app/models/clinic-report.model';
const ELEMENT_DATA: IClinicReportModel[] = [
  {clinic: "Unidade 1" ,qtd: 23, date: "19/02/2019 - 20:00", hours:"48:00h"},
  

];


@Component({
  selector: 'medlog-hours-report',
  templateUrl: './hours-report.component.html',
  styleUrls: ['./hours-report.component.scss']
})
export class HoursReportComponent implements OnInit {

  constructor() { }

  myControl = new FormControl();
  results: string[];
  text: string;

  
  filteredOptions: Observable<string[]>;
  matAutoComplete:string
  final:any;
  initial:any
  showTable:boolean = false;
  
  ngOnInit() {
   
  }

  search(event) {
    this.results = ['Todas as Unidades', 'Unidade 1', 'Unidade 2','Unidade 3','Unidade 4']
}

  displayedColumns: string[] = ['clinic', 'qtd', 'date', 'hours'];
  // tslint:disable-next-line:member-ordering
  dataSource = ELEMENT_DATA;
  

}