// Binding
"use strict";
let roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return this.width * this.length
    }
}

/*binding the object roomDimensions to the getArea function*/
let boundGetArea = roomDimensions.getArea.bind(roomDimensions);

//Test
boundGetArea();

/* Output expected 

5000

*/
