// Object.create

var personProto = {
    calcAge: function () {
        console.log(2018 - this.birth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.birth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    birth: {value: 1969},
    job: {value: 'designer'}
});







