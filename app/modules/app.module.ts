import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { HttpModule }            from '@angular/http';
import { ChartModule }           from 'angular2-highcharts';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from '../components/app.component';
import { ExerciseService }       from '../services/exercises.service';
import { UserService }           from '../services/user.service';
import { DashboardComponent}     from '../components/dashboard.component';
import { HomeComponent}          from '../components/home.component';
import { ProgressChartComponent }from '../components/progress-chart.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ProgressChartComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:    [ ExerciseService, UserService ]

})
export class AppModule { }
