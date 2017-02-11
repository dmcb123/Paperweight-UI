"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/toPromise');
var ExerciseService = (function () {
    function ExerciseService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
        this.dateParam = '&date=';
        this.userParam = '&user=';
        this.exerciseParam = '&exercise=';
        this.dateFromParam = '&dateFrom=';
        this.dateToParam = '&dateTo=';
        this.exerciseEndpoint = 'exercise?';
        this.workoutEndpoint = 'workout?';
        this.exercisesByUserOnDate = 'workout?date=2016-10-03+00:00:00&user=dmcb123';
        this.exerciseDataByUser = 'exercise?exercise=deadlift&user=dmcb123'; // URL to web api
        this.exerciseList = 'exerciseList?user=dmcb123';
    }
    ExerciseService.prototype.getExercisesForDate = function () {
        return this.http.get(this.baseUrl + this.exercisesByUserOnDate)
            .toPromise()
            .then(function (response) { return response.json().workout; });
    };
    ExerciseService.prototype.getExerciseList = function () {
        return this.http.get(this.baseUrl + this.exerciseList)
            .toPromise()
            .then(function (response) { return response.json().workout; });
    };
    ExerciseService.prototype.getExerciseData = function (exerciseName, user, dateFrom, dateTo) {
        return this.http.get(this.baseUrl +
            this.exerciseEndpoint +
            this.exerciseParam +
            exerciseName +
            this.userParam +
            user +
            this.dateFromParam +
            dateFrom +
            this.dateToParam +
            dateTo)
            .toPromise()
            .then(function (response) { return response.json().workout; });
    };
    ExerciseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ExerciseService);
    return ExerciseService;
}());
exports.ExerciseService = ExerciseService;
//# sourceMappingURL=exercises.service.js.map