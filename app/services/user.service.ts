import { Injectable }    from '@angular/core';

@Injectable()
export class UserService {
    
    trainingSplit = 
        {
            'Chest + Triceps' : ['Bench Press', 'Incline Dumbbell Press', 'Flat Dumbbell Press', 'Cable Flyes'],
            'Back + Biceps'   : ['Deadlift', 'Bent Over Row', 'T-Bar Row', 'Lat Pulldown'],
            'Shoulders'       : ['Military Press', 'Dumbbell Press', 'Lateral Raises', 'Front Raises'],
            'Legs'            : ['Squat', 'Leg Press', 'Leg Extension', 'Leg Curl']
        };
    //trainingSplit = ['Chest + Triceps', 'Back + Biceps', 'Shoulders', 'Legs'];

    getTrainingSplit(): Promise<Object> {        
        return Promise.resolve(this.trainingSplit);
    }
}
