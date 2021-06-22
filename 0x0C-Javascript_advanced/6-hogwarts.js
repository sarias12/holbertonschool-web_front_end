// Private methods with closure
"use strict";

var studentHogwarts = function () {
    
    // Private variables
    var privateScore = 0;
    var name = null;

     // Private methods
    var changeScoreBy =  function  (points) {
        return privateScore += points;
    }

    // Public Methods
    var setName = function(newName) {
        name = newName;
        return name;
    }

    var rewardStudent = function() {
        changeScoreBy(1);
    }

    var penalizeStudent = function() {
        changeScoreBy(-1);
    }
    var getScore = function () {
        return `${name}: ${privateScore}`
    }
    
    return{
        setName,
        rewardStudent,
        penalizeStudent,
        getScore
    }
}

let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.getScore();

let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.getScore();


// Test 

harry.getScore();
draco.getScore();

/* Output expected 

Harry: 4
Draco: -2

*/
