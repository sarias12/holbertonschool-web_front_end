//Prime numbers & timing execution
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

// Measuring the execution time of the function 
var startTime = performance.now();
countPrimeNumbers();
var endTime = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (endTime - startTime) + " milliseconds.");


/* Output expected 

Log to the console the time in milliseconds to execute the function
in this format:
Execution time of printing countPrimeNumbers was <time used> milliseconds.

*/
