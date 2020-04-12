import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard.component';
import { LineChartComponent } from './modules/dashboard/components/line-chart/line-chart.component';
import { StaffComponent } from './modules/staff/pages/staff/staff.component';
import { StaffDetailComponent } from './modules/staff/pages/staff-detail/staff-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LineChartComponent,
    StaffComponent,
    StaffDetailComponent
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
