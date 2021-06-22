// Binding
"use strict";
var roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return this.width * this.length
    }
}

/*binding the object roomDimensions to the getArea function*/
var boundGetArea = roomDimensions.getArea.bind(roomDimensions);

//Test
boundGetArea();

/* Output expected 

5000

*/
