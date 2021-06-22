// Changing stack order using setTimeout
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

// Measuring the execution time of the function and Running the function countPrimeNumbers 100 times
let startTime = performance.now();
setTimeout(() => {
    for (let index = 0; index < 100; index++) {
        countPrimeNumbers();
    }
}, 0);
let endTime = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (endTime - startTime) + " milliseconds.");


/* Output expected 

Log to the console the time in milliseconds to execute the function
in this format:
Execution time of calculating prime numbers 100 times was <time used> milliseconds.

*/
