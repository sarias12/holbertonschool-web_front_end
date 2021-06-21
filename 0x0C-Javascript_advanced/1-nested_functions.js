// Closure Scope Chain
"use strict";

let globalVariable = 'Welcome';
function outer() {
    alert(globalVariable);
    let course = 'Holberton';
    function inner() {
        alert(globalVariable + ' ' + course);
        let exclamation = '!';
        function inception() {
            alert(globalVariable + ' ' + course + exclamation);
        }
        inception();
    }
    inner();
}
outer();

// Test

/*
Running the script should display three popups one by one with 
the text Welcome, Welcome Holberton, 
and Welcome Holberton! 
 */
