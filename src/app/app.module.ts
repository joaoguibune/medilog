import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule, NavComponent } from './shared';
import { HomeComponent } from './home/home.component';
import { MatListModule, MatIconModule, MatSidenavModule, MatButtonModule, MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonitoringComponent } from './home/monitoring/monitoring.component';
import { ClinicReportComponent } from './home/clinic-report/clinic-report.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete'; 
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import { HoursReportComponent } from './home/hours-report/hours-report.component';
import { AuthenticationService } from './_services/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AuthGuard } from './_guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MonitoringComponent,
    ClinicReportComponent,
    LoginComponent,
    HoursReportComponent   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    AppRoutingModule,
    AutoCompleteModule,
    CalendarModule,
    TableModule,    
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
