/*
for (let i = 0; i < 10; i++){
    console.log(i);
}

for (let i = 1; i <= 9; i++){
    console.log(i);
}
*/
var bob = ['Bob', 'Blap', 1990, 'Coder', false];
/*
for (let i = 0; i < bob.length; i++) {
    console.log(bob[i]);
}

// while loop
var i = 0;
while (i < john.length){
    console.log(john[i]);
    i++;
}
*/
// continue and break statements
/*
    continue - quit current iteration and continue to the next
    break - break out of loop
    != - loose not equal
    !== - strict not equal
 */

 // var  lol = i < 5 ? 'cat' : 'dog';

// Looping backwards
for (var i = bob.length - 1; i >= 0; i--){
    console.log('hi' + bob[i])
}