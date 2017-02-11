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
var exercises_service_1 = require('../services/exercises.service');
var user_service_1 = require('../services/user.service');
var HomeComponent = (function () {
    function HomeComponent(exerciseService, userService) {
        this.exerciseService = exerciseService;
        this.userService = userService;
        this.exercises = [];
        this.isActive = true;
        this.trainingMap = {};
        this.trainingSplit = [];
        this.selectedSplit = 'Chest + Triceps';
        this.splitRoutine = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trainingSplit = ['Hel'];
        this.selectedSplit = 'Chest + Triceps';
        this.splitRoutine = ['Wazzzaaaaa'];
        function createTrainingSplit(key, value, map) {
            console.log(key);
        }
        this.exerciseService.getExercisesForDate().then(function (data) { return data.sets.forEach(function (exercise) { return _this.exercises.push(exercise); }); });
        this.userService.getTrainingSplit()
            .then(function (map) { return _this.trainingMap = map; })
            .then(function () { return _this.trainingSplit = Object.keys(_this.trainingMap); })
            .then(function () { return _this.selectedSplit = _this.trainingSplit[0]; })
            .then(function () { return _this.splitRoutine = _this.trainingMap[_this.selectedSplit]; });
    };
    HomeComponent.prototype.updateSelectedSplit = function (split) {
        this.selectedSplit = split;
        this.splitRoutine = this.trainingMap[this.selectedSplit];
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: '../templates/home.component.html',
        }), 
        __metadata('design:paramtypes', [exercises_service_1.ExerciseService, user_service_1.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map