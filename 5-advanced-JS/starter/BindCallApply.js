// Call method lets you set the "this" variable
// Apply method does the same as call but as an array
// Bind method allows to set some parameters for a function

var j = {
    name: 'John',
    age: 26,
    job: 'teacher',
    present: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Formal: ', this.name, this.job, this.age, timeOfDay);
        } else if (style === 'friendly') {
            console.log("Friendly: ", this.name, this.job, this.age, timeOfDay);
        }
    }
};

var e = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

j.present.call(e, 'friendly', 'afternoon');
//j.present.apply(e, ['friendly', 'afternoon']); // <-- Won't work because it doesn't expect an array

var johnFriendly = j.present.bind(j, 'friendly');
johnFriendly('morning');

var emilyFormal = j.present.bind(e, 'formal');
emilyFormal('noon');




