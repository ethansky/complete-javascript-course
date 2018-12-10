var john = {
    fName: 'John',
    lName: 'Smith',
    year: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    fullName: function () {
        console.log(john['fName'],john['lName']);
    }
};
john.fullName();
console.log(john.isMarried);
console.log(john['fName']);

john.job = 'designer';
john['isMarried'] = true;
console.log(john.job);
console.log(john['isMarried']);

var jane = new Object();
jane.name = 'Jane';
jane.year = 1969;
jane['lName'] = 'Smith';
console.log(jane);

// Traversing object
// for (var _tempName_ in _obj_){ obj[_tempName_] = stuff}