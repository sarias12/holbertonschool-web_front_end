// Changing DOM with closure
"use strict";

function changeMode(size, weight, transform, background, color) {
    
    let body = document.getElementsByTagName("BODY")[0];
    
    //Closure
    return function () {
        body.style.fontSize        = size + 'px';
        body.style.fontWeight      = weight;
        body.style.textTransform   = transform;
        body.style.backgroundColor = background;
        body.style.color           = color;

    }
}

function main() {
    let body = document.getElementsByTagName("BODY")[0];

    // Defining Themes.
    let spooky     = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode   = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    //Adding a paragraph to the body of the page.
    const paragraph = document.createElement("p");
    let textNode = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(textNode);
    body.appendChild(paragraph);

    //Adding to Button to change to the Spooky theme
    let spookyButton = document.createElement("button");
    let textButton = document.createTextNode("Spooky");
    spookyButton.appendChild(textButton);
    spookyButton.onclick = () => spooky();
    body.appendChild(spookyButton);

    //Adding to Button to change to the Dark Mode theme
    let darkModeButton = document.createElement("button");
    textButton = document.createTextNode("Dark Mode");
    darkModeButton.appendChild(textButton);
    darkModeButton.onclick = () => darkMode();
    body.appendChild(darkModeButton);

    //Adding to Button to change to the Scream Mode theme
    let screamModeButton = document.createElement("button");
    textButton = document.createTextNode("Scream Mode");
    screamModeButton.appendChild(textButton);
    screamModeButton.onclick = () => screamMode();
    body.appendChild(screamModeButton);
}
