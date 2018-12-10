/*
- Almost everything is an object. If it's not a primitive, then it's an object
- Super in Java = prototype in Javascript

Inheritance: One object is based off of another, giving it access to the properties/methods from the parent
    EX: Athlete inherits Person properties
 */

// Function Constructor
/*
var john = {
    name: 'John',
    birth: 1990,
    job: 'teacher'
};
*/

// .hasOwnProperty() checks whether a property comes from the object itself (not inherited(
// .instanceOf() checks whether object is child of parent

var Person = function (name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.birth);
};

Person.prototype.lastName = 'Smith';

var john =  new Person('John', 1990, 'teacher');

john.calculateAge();
console.log(john.lastName);









