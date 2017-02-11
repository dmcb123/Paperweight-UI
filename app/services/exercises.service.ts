import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Workout }       from '../types/Workout';
import { Exercise }       from '../types/Exercise';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ExerciseService {
  private baseUrl          = 'http://localhost:8080/';
  private dateParam        = '&date=';
  private userParam        = '&user=';
  private exerciseParam    = '&exercise=';
  private dateFromParam    = '&dateFrom=';
  private dateToParam      = '&dateTo=';
  private exerciseEndpoint = 'exercise?';
  private workoutEndpoint  = 'workout?';
  private exercisesByUserOnDate  = 'workout?date=2016-10-03+00:00:00&user=dmcb123';
  private exerciseDataByUser     = 'exercise?exercise=deadlift&user=dmcb123';// URL to web api
  private exerciseList           = 'exerciseList?user=dmcb123';

  constructor(private http: Http) { }

  getExercisesForDate(): Promise<Workout> {
    return this.http.get(this.baseUrl+this.exercisesByUserOnDate)
               .toPromise()
               .then(response => response.json().workout as Workout);
  }

  getExerciseList(): Promise<Workout> {
    return this.http.get(this.baseUrl+this.exerciseList)
               .toPromise()
               .then(response => response.json().workout as Workout);
  }


  getExerciseData( exerciseName: string, user: string, dateFrom: string, dateTo: string ): Promise<Workout> {
    return this.http.get(this.baseUrl+
                        this.exerciseEndpoint+
                        this.exerciseParam+
                        exerciseName+
                        this.userParam+
                        user+
                        this.dateFromParam+
                        dateFrom+
                        this.dateToParam+
                        dateTo)
               .toPromise()
               .then(response => response.json().workout as Workout);
  }
}
