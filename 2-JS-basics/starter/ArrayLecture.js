/*var names = ['John', 'Mark', 'Bobby'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
console.log(names);
names[4] = 'Blap';
console.log(names);
console.log(names.length);
*/
// Arrays can contain different datatypes in the same array

var john = ['John', 'Smith', 1990, 'teacher', false];
console.log(john);
john.push('blue'); // Adds element to the end of array
console.log(john);
john.unshift('Mr.'); // Adds element to the beginning of array
console.log(john);
john.pop(); // Removes an element from the end
console.log(john);
john.shift(); // Removes an element from the beginning
console.log(john);

console.log(john.indexOf(1990)); // Returns index of item, returns -1 if not found
