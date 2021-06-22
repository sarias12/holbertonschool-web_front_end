// Execution stack & timing execution
function countPrimeNumbers() {
    var currentNumber = 2;
    var primes = [];
    while ( currentNumber <= 100 ) {
        var i = 1;
        var dividerCounter = 0;
        while (i <= currentNumber) {
            if (currentNumber % i == 0){
                dividerCounter += 1;
            }
            if (dividerCounter > 2) {
                break;
            }
            i++;
        }
        if (dividerCounter == 2) {
            primes.push(currentNumber)
        }
        currentNumber += 1;
    }
    return primes.length;
}

// Measuring the execution time of the function and Running the function countPrimeNumbers 100 times
var startTime = performance.now();
for (let index = 0; index < 100; index++) {
    countPrimeNumbers();
}
var endTime = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (endTime - startTime) + " milliseconds.");


/* Output expected 

Log to the console the time in milliseconds to execute the function
in this format:
Execution time of calculating prime numbers 100 times was <time used> milliseconds.

*/
