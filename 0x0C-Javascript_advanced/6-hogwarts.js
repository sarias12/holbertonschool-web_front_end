// Private methods with closure
"use strict";

let studentHogwarts = function () {
    
    // Private variables
    let privateScore = 0;
    let name = null;

     // Private methods
    let changeScoreBy =  function  (points) {
        return privateScore += points;
    }

    // Public Methods
    let setName = function(newName) {
        name = newName;
        return name;
    }

    let rewardStudent = function() {
        changeScoreBy(1);
    }

    let penalizeStudent = function() {
        changeScoreBy(-1);
    }
    let getScore = function () {
        return `${name}: ${privateScore}`
    }
    
    return{
        setName: setName,
        rewardStudent: rewardStudent,
        penalizeStudent: penalizeStudent,
        getScore: getScore
    }
}

let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());


/* Output expected 

Harry: 4
Draco: -2

*/
