/*
var fName = 'Nyoom';

console.log(fName);

var lName = 'Nyoomy';
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);
job = 'teacher';
console.log(job);



var fName = 'Bob';
var age = 28;

// Type coercion
console.log(fName +  ' ' + age);

var job, isMarried;
job = 'cs';
isMarried = true;

console.log(fName + ' blap blap ' + age + ' year blap ' + job + ' married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert('wut');

var lName = prompt('What is blap?');

console.log(lName);

*/

/************************
 * Basic operators
 */
var yJ, asdf, w, bool;
yJ = 20 - 18;
asdf = 2002 - 120.2;
w = 23123 / 123;
bool = 18 <= 20;


console.log(bool);

// typeof operator

// null is object, undefined is undefined
var name = 'asdfadf';
var x = null;
console.log(typeof x);

console.log('cow' > 2);
var y;
x = y = 28;
//operator works right to left
console.log(x, y);

x *= 2;

console.log(x);

if (x) {

} else if (x) {

} else {

}

// Strict(no conversions): 77 === '77' -> false
// Loose (converts to common type): 77 == '77' -> true