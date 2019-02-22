import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonitoringComponent } from './home/monitoring/monitoring.component';
import { ClinicReportComponent } from './home/clinic-report/clinic-report.component';
import { LoginComponent } from './login/login.component';
import { HoursReportComponent } from './home/hours-report/hours-report.component';

const routes: Routes = [
 
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: 'monitoramento', pathMatch: 'full'},
		  { path: 'monitoramento', component: MonitoringComponent },
		  { path: 'relatorio-unidades', component: ClinicReportComponent },
		  { path: 'relatorio-horas', component: HoursReportComponent }
		]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
