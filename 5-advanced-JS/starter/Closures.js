// Closures - Inner function has always access to the variables and parameters of its outer function, even after the outer function has returned

function retirement(retireAge) {
    return function (birth){
        var age = 2018 - birth;
        var a = 'years left until retirement';
        console.log((retireAge - age), a);
    }
}

var retireUS = retirement(66);
var retireGermany = retirement(65);
var retireIceland = retirement(67);
retireUS(1990);
retireGermany(1990);
retireIceland(1990);

//retirement(66)(1990);




