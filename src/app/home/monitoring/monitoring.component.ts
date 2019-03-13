import { Component, OnInit } from '@angular/core';
import { IUnityReport } from 'src/app/models/unity-report.model';
import * as L from 'leaflet';




@Component({
  selector: 'medlog-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

  latLong: string = "-25.480877, -49.304424"

  markers: L.Layer[] = [];
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 11,
    center: L.latLng(-25.480877, -49.304424)
  };
  constructor() { }
  cols: any[];
  unities: IUnityReport[] = [];


  ngOnInit() {
    this.generateClinicsData();
  }



  generateProfessionalsData() {

    this.markers = [];  

    for (let i = 0; i < 100; i++) {
      let popupContent = `<ul class="medilog-popup"><li>Médico: <strong>José Silva</strong></li>
      <li>Unidade: <strong>Xaxim</strong></li>
      <li>Status: <strong>Online</strong></li>
      `
      const icon = L.icon({
        iconUrl: '2273e3d8ad9264b7daa5bdbf8e6b47f8.png',
        shadowUrl: '44a526eed258222515aa21eaffd14a96.png'
      });

      const newMarker = L.marker(
        [-25.480877 + 0.1 * (Math.random() - 0.5), -49.304424 + 0.1 * (Math.random() - 0.5)],
        {
          icon: L.icon({
            iconSize: [32, 32],
            iconAnchor: [32, 32],
            iconUrl: '../../../assets/img/doctor.png'
          })
        }
      ).bindPopup(popupContent);
      
    }

  }

  generateClinicsData() {    
    
    this.markers = [];
    
    this.cols = [
      { field: 'id', header: '#' },
      { field: 'name', header: 'Nome' },
      { field: 'unity_type', header: 'Tipo de Unidade' },
      { field: 'doctors', header: 'Médicos Online' }
    ];


    for (let i = 1; i < 7; i++) {

      let unity = { id: i, name: "Unidade "+i, unity_type: 'UPA 24 Horas', doctors: Math.floor(Math.random() * (+50 - +1)) + +1 }
      this.unities.push(unity);

      let popupContent = `<ul class="medilog-popup"><li>Médico: <strong>José Silva</strong></li>
      <li>Unidade: <strong>Unidade i</strong></li>
      <li>Status: <strong>Online</strong></li>
      `
      const newMarker = L.marker(
        [-25.480877 + 0.1 * (Math.random() - 0.5), -49.304424 + 0.1 * (Math.random() - 0.5)],
        {
          icon: L.icon({
            iconSize: [32, 32],
            iconAnchor: [32, 32],
            iconUrl: '../../../assets/img/hospital.png'
          })
        }
      ).bindTooltip("Unidade " + i).openTooltip()

      this.markers.push(newMarker)
    }

  }


}
