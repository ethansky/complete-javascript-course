// Ternary
var firstName = 'John';
var age = 16;

age > 21 ? console.log('if') : console.log('else');

var drink = age > 21 ? 'beer' : 'juice';

console.log(drink);

// Switch
var job = 'none';
switch (job) {
    case 'teacher' :
    case 'instructor':
        console.log(firstName, 'is teacher');
        break;
    case 'uber' :
        console.log(firstName, 'is driver');
        break;
    default :
        console.log('unemployed');
}