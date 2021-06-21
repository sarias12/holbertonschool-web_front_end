// Lexical scoping and welcome message
"use strict";

function welcome(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    displayFullName();
}

// Test 
/* Run welcome('Holberton', 'School'); 
should prompt an alert with this content: Welcome Holberton School!
alert(fullName), should return a reference error fullName is not defined */
