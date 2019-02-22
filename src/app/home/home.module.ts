import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ClinicReportComponent } from './clinic-report/clinic-report.component';
import { HoursReportComponent } from './hours-report/hours-report.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
