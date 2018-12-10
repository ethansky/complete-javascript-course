var johnBills = {
    bills: [124, 48, 268, 180, 42],
    calcTip: function () {
        var tips = [];
        var finalBill = [];

        for (var i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            console.log('bill: ', bill);
            if (bill < 50) {
               tips[i] = (bill * .2);
               finalBill[i] = (bill + bill * .2);
            } else if (bill < 200) {
                tips[i] = (bill * .15);
                finalBill[i] = (bill + bill * .15);
            } else {
                tips[i] = (bill * .1);
                finalBill[i] = (bill + bill * .1);
            }
        }
        console.log(tips);
        console.log(finalBill);
    }
};
johnBills.calcTip();
console.log(johnBills);