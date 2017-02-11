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
var common_1 = require('@angular/common');
var exercises_service_1 = require('../services/exercises.service');
var ProgressChartComponent = (function () {
    function ProgressChartComponent(exerciseService) {
        this.exerciseService = exerciseService;
        this.isActive = false;
        this.exerciseList = [];
        this.exerciseData = [];
        this.exerciseDataDates = [];
        this.exerciseDataWeight = [];
        this.monthInMillis = 6 * 2629746000;
        this.datePipe = new common_1.DatePipe('GMT');
    }
    ProgressChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentExercise = "Deadlift";
        this.dateFrom = new Date(Date.now() - this.monthInMillis);
        this.dateFromString = this.datePipe.transform(this.dateFrom, 'yyyy-MM-dd');
        this.dateTo = new Date(Date.now());
        this.dateToString = this.datePipe.transform(this.dateFrom, 'yyyy-MM-dd');
        this.repsFrom = 0;
        this.repsTo = 0;
        this.exerciseService.getExerciseList()
            .then(function (data) { return _this.exerciseList = data.exercises; })
            .then(function () { return _this.currentExercise = _this.exerciseList[0]; })
            .then(function () { return _this.updateExercise(_this.currentExercise); });
    };
    ProgressChartComponent.prototype.updateExercise = function (selectedExercise) {
        var _this = this;
        this.currentExercise = selectedExercise;
        this.exerciseData = [];
        this.exerciseService.getExerciseData(this.currentExercise, "dmcb123", this.datePipe.transform(this.dateFrom, 'yyyy-MM-dd HH:mm:ss'), this.datePipe.transform(this.dateTo, 'yyyy-MM-dd HH:mm:ss'))
            .then(function (data) { return _this.exerciseData = data.sets; })
            .then(function () { return _this.graphData(); });
    };
    ProgressChartComponent.prototype.updateReps = function () {
        if (this.repsFrom == null)
            this.repsFrom = 0;
        if (this.repsTo == null)
            this.repsTo = 0;
        this.updateExercise(this.currentExercise);
    };
    ProgressChartComponent.prototype.updateDates = function () {
        this.updateExercise(this.currentExercise);
    };
    ProgressChartComponent.prototype.graphData = function () {
        var _this = this;
        this.exerciseDataDates.length = 0;
        this.exerciseDataWeight.length = 0;
        this.exerciseData.forEach(function (exercise) { return _this.exerciseDataDates.push(new Date(_this.datePipe.transform(exercise.date, 'yyyy-MM-dd HH:mm:ss'))); });
        this.exerciseData.forEach(function (exercise) { return _this.exerciseDataWeight.push(exercise.weight); });
        this.options = {
            title: { text: this.exerciseData[0].name },
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
    };
    ProgressChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'progress-chart',
            templateUrl: '../templates/progress-chart.component.html'
        }), 
        __metadata('design:paramtypes', [exercises_service_1.ExerciseService])
    ], ProgressChartComponent);
    return ProgressChartComponent;
}());
exports.ProgressChartComponent = ProgressChartComponent;
//# sourceMappingURL=progress-chart.component.js.map