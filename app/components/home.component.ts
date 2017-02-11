import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercises.service';
import { UserService } from '../services/user.service';
import { Exercise }        from '../types/Exercise';
import { Workout }        from '../types/Workout';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: '../templates/home.component.html',
})
export class HomeComponent {
  constructor(private exerciseService: ExerciseService, private userService: UserService) {}
  exercises: Exercise[] = [];
  isActive: Boolean = true;
  trainingMap: Object = {};
  trainingSplit: string[] = [];
  selectedSplit: string = 'Chest + Triceps';
  splitRoutine: string[] = [];


  ngOnInit(): void {
    this.trainingSplit=['Hel'];
    this.selectedSplit='Chest + Triceps';
    this.splitRoutine =['Wazzzaaaaa'];

    function createTrainingSplit( key:string, value:string[], map:Map<string,string[]>) : void {
      console.log(key);
    }

    this.exerciseService.getExercisesForDate().then( data => data.sets.forEach( (exercise: Exercise) => this.exercises.push(exercise)))
    this.userService.getTrainingSplit()
    .then( map => this.trainingMap = map)
    .then( ()  => this.trainingSplit   = Object.keys(this.trainingMap))
    .then( ()  => this.selectedSplit   = this.trainingSplit[0])
    .then( ()  => this.splitRoutine    = this.trainingMap[this.selectedSplit])
    
  }

  updateSelectedSplit(split: string): void{
    this.selectedSplit = split;
    this.splitRoutine  = this.trainingMap[this.selectedSplit];
  }
}
