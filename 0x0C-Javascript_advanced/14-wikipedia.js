//  Simple callback
"use strict";

function createElement(data) {

    const paragraph = document.createElement("p");
    let textNode = document.createTextNode(data);
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
    xhttp.onreadystatechange  = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.response).query.pages['21721040'].extract;
            callback(data);
        }
    }

    xhttp.send();
}

queryWikipedia(createElement);
