import { Component, OnInit, Input, SimpleChanges, OnChanges}   from '@angular/core';
import { DatePipe }           from '@angular/common';
import { ExerciseService }    from '../services/exercises.service';
import { Exercise }           from '../types/Exercise';
import { Workout }            from '../types/Workout';
import { ProgressChartComponent }            from './progress-chart.component';

@Component ({
    moduleId: module.id,
    selector: 'dashboard',
    providers: [ProgressChartComponent],
    templateUrl: '../templates/dashboard.component.html'
})
export class DashboardComponent {
    constructor( private progressChart: ProgressChartComponent){}

}