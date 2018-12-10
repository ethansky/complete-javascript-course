// Primitives vs Objects
// Primitives are copied into stuff, including functions, so the original prim isn't affected
// Objects have their references passed in


var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Bob',
    city: 'Bobbyville'
};

function change(a,b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age,obj);
console.log(age);
console.log(obj.city);

