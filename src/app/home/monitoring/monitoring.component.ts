import { Component, OnInit } from '@angular/core';
import { IUnityReport } from 'src/app/models/unity-report.model';




@Component({
  selector: 'medlog-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  constructor() { }
  cols: any[];
  unities:IUnityReport[];
  ngOnInit() {
    this.unities = [
      {id: 1, name: "Unidade Hauer" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
      {id: 2, name: "Unidade Xaxim" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
      {id: 3, name: "Unidade Boqueirão" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
      {id: 4, name: "Unidade Campo Largo" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
      {id: 5, name: "Unidade Uberaba" ,unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1},
    
    ];
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'name', header: 'Nome' },
      { field: 'unity_type', header: 'Tipo de Unidade' },
      { field: 'doctors', header: 'Médicos Online' }   
    ];
  }

  
 

}
