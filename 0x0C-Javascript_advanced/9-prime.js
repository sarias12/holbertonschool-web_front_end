//Prime numbers & timing execution
function countPrimeNumbers() {
    let currentNumber = 2;
    let primes = [];
    while ( currentNumber <= 100 ) {
        let i = 1;
        let dividerCounter = 0;
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
let startTime = performance.now();
countPrimeNumbers();
let endTime = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (endTime - startTime) + " milliseconds.");


/* Output expected 

Log to the console the time in milliseconds to execute the function
in this format:
Execution time of printing countPrimeNumbers was <time used> milliseconds.

*/
