import { Component, OnInit, Input, SimpleChanges, OnChanges}   from '@angular/core';
import { DatePipe }           from '@angular/common';
import { ExerciseService }    from '../services/exercises.service';
import { Exercise }           from '../types/Exercise';
import { Workout }            from '../types/Workout';

@Component ({
    moduleId: module.id,
    selector: 'progress-chart',
    templateUrl: '../templates/progress-chart.component.html'
})
export class ProgressChartComponent {
    constructor( private exerciseService: ExerciseService ){}
    isActive:           boolean     = false;
    exerciseList:       string[]    = [];
    exerciseData:       Exercise[]  = [];
    exerciseDataDates:  Date[]      = [];
    exerciseDataWeight: number[]    = [];
    monthInMillis                   = 6*2629746000;
    datePipe                        = new DatePipe('GMT');
    options:            Object;
    currentExercise:    string;
    dateFrom:           Date;
    dateFromString:     String;
    dateTo:             Date;
    dateToString:       String;
    repsFrom:           number;
    repsTo:             number;
    
    ngOnInit(): void {
        this.currentExercise = "Deadlift";
        this.dateFrom        = new Date( Date.now() - this.monthInMillis );
        this.dateFromString  = this.datePipe.transform( this.dateFrom, 'yyyy-MM-dd');
        this.dateTo          = new Date( Date.now() );
        this.dateToString    = this.datePipe.transform( this.dateFrom, 'yyyy-MM-dd');
        this.repsFrom        = 0;
        this.repsTo          = 0;

        this.exerciseService.getExerciseList()
        .then( (data: Workout) => this.exerciseList = data.exercises )
        .then( () => this.currentExercise = this.exerciseList[0] )
        .then( () => this.updateExercise(this.currentExercise) );
        
    }

    updateExercise( selectedExercise: string ): void {
        this.currentExercise = selectedExercise;
        this.exerciseData = [];
        this.exerciseService.getExerciseData( this.currentExercise,
                                              "dmcb123",
                                              this.datePipe.transform( this.dateFrom, 'yyyy-MM-dd HH:mm:ss'),
                                              this.datePipe.transform( this.dateTo, 'yyyy-MM-dd HH:mm:ss'))
        .then( (data: Workout) => this.exerciseData = data.sets )
        .then( () => this.graphData());
    }
    
    updateReps(): void {
        if( this.repsFrom == null )
            this.repsFrom = 0;
        if( this.repsTo == null )
            this.repsTo = 0;
        this.updateExercise( this.currentExercise );
    }

    updateDates(): void {
        this.updateExercise( this.currentExercise );
    }

    graphData(): void {
        this.exerciseDataDates.length = 0;
        this.exerciseDataWeight.length = 0;
        this.exerciseData.forEach( (exercise: Exercise) => this.exerciseDataDates.push( new Date(this.datePipe.transform( exercise.date, 'yyyy-MM-dd HH:mm:ss'))));
        this.exerciseData.forEach( (exercise: Exercise) => this.exerciseDataWeight.push(exercise.weight) );

        this.options = {
            title : { text : this.exerciseData[0].name },
            xAxis: {
                type: Date,
                labels: {
                    format: '{value:%Y/%m/%d}',
                },
                categories: this.exerciseDataDates
            },
            yAxis: {
                type: Number,
                title: {
                    text: 'Weight'
                }
            },
            series: [{ name: "dmcb123", data: this.exerciseDataWeight }]
        };
    }
}