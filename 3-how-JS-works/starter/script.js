///////////////////////////////////////
// Lecture: Hoisting
//calculateAge(1965);
/*
function calculateAge(year) {
    console.log(2018 - year);
}

//calculateAge(1990);

//retirement(1965);

var retirement = function (year) {
    console.log(65 - (2018 - year));
}


// Variables

console.log(age);
var age = 23;
//console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

*/
//retirement(1990);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);
/*
calcAge(1985);

function calcAge(year){
    console.log(2016-year);
    console.log(this);
}
*/
var john = {
    name: 'John',
    birth: 1990,
    calcAge: function () {
        console.log(this);
        console.log(2018 - this.birth);
        /*
        function inner() {
            console.log(this);
        }
        inner();
        */
    }
}
john.calcAge();

var mike = {
    name: 'Mike',
    birth: 1984
};

mike.calcAge = john.calcAge;
mike.calcAge();




