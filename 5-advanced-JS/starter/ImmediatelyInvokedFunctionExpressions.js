/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (luck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - luck);
})(5);




