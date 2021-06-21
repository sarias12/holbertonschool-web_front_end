"use strict";

function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return function () {
		return seat;
		};
	}
	let students = [];
	for (let index = 0; index < numbersOfStudents; index++) {
		students.push(studentSeat(index + 1));
	}
	return students;
}

let classRoom = createClassRoom(10);

// Test

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());

/* Output expected 

1
4
10

*/
