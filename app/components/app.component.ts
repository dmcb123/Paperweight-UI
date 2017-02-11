import { Component, OnInit }  from '@angular/core';
import { ExerciseService }    from '../services/exercises.service';
import { Exercise }           from '../types/Exercise';
import { Workout }            from '../types/Workout';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: '../templates/app.component.html',
})
export class AppComponent {
  title: string = "Paperweight";
}
