// Function Declaration
// function whatDo(job, firstName) {}
function blapBlap(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches code';
        case 'driver':
            return firstName + ' drives a tesla';
        case 'designer':
            return firstName + ' makes websites';
        default:
            return firstName + ' does a thing';
    }
}

//Function Expression
var whatDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches code';
        case 'driver':
            return firstName + ' drives a tesla';
        case 'designer':
            return firstName + ' makes websites';
        default:
            return firstName + ' does a thing';
    }
}

/*
 function statement and expression are the same thing output wise
 Difference is hoisting: function declaration can be called physically above the the code that corresponds to it while
 function expressions can't since it hasn't "been defined" yet

 Function expressions produce immediate results while function declarations do not
*/
console.log(whatDo('teacher', 'Bob'));
