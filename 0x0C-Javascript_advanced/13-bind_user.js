// Binding + Closure
"use strict";

let user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Telaviv',
    occupation: 'Engineer',
}

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`)
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);

// Test 
bindLogWelcomeUser('Welcome');
bindLogWelcomeUser('Hello');

/* Output expected 

Welcome, Buillaume. Your occupation is: Engineer
Hello, Buillaume. Your occupation is: Engineer

*/
