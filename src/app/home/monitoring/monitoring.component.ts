import { Component, OnInit } from '@angular/core';
import { IUnityReport } from 'src/app/models/unity-report.model';


const ELEMENT_DATA: IUnityReport[] = [
  {id: 1, name: "Unidade" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
  {id: 2, name: "Unidade" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
  {id: 3, name: "Unidade" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
  {id: 4, name: "Unidade" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
  {id: 5, name: "Unidade" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},

];

@Component({
  selector: 'medlog-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  displayedColumns: string[] = ['id', 'name', 'unity_type', 'doctors'];
  // tslint:disable-next-line:member-ordering
  dataSource = ELEMENT_DATA;

}
