function tips(bill) {
    if (bill < 50){ return bill * .2}
    else if (bill <= 200){ return bill * .15}
    else if (bill > 200){ return bill * .1}
}

var totalTips = [tips(124), tips(48), tips(268), tips(-1)];
var totalBill = [124 + tips(124), 48 + tips(48), 268 + tips(268), tips(-1)]

console.log(totalTips);
console.log(totalBill);
