// Closure
"use strict";

function welcomeMessage(fullName) {
    return function () {
        alert('Welcome ' + fullName);
    }
}

let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');

// Test

guillaume();
alex();
fred();

/* Should display three alerts */
