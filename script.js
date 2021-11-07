'use strict';

// Elements

const billAmount = document.querySelector('.bill-value');

const tipPercent = document.querySelectorAll('.percentage-button');

const customTip = document.querySelector('.custom-value');

const totalPeople = document.querySelector('.no-of-people ');

const tipPerPerson = document.querySelector('.tip-per-person-value');

const totalPerPerson = document.querySelector('.total-per-person-value');

const reset = document.querySelector('.reset-button');

// Event handlers
let bill, tip, total, people;

reset.addEventListener('click', function () {

    billAmount.value = customTip.value = totalPeople.value = '';

    display(0, 0, 0);


})

billAmount.addEventListener('input', function () {

    bill = Number(billAmount.value);

})


for (let i = 0; i < tipPercent.length; i++) {
    tipPercent[i].addEventListener('click', function () {

        if (!bill) {

            billAmount.focus();

        } else {

            let a = Number(tipPercent[i].innerHTML.replace('%', ''));
            tip = (a * 0.01) * bill;

        }
    })

}

customTip.addEventListener('input', function () {
    if (!bill) {

        billAmount.focus();

    } else {
        tip = Number(customTip.value);
        console.log(bill, tip)
    }
})

totalPeople.addEventListener('input', function () {

    if (!tip) {

        customTip.focus();

    } else {

        people = Number(totalPeople.value);
        total = (bill + tip);


        display(people, tip, total)
    }
})

const display = function (peop, t, tot) {
    if (!peop && !t && !tot) {
        tipPerPerson.value = "$0.00"
        totalPerPerson.value = "$0.00"
    } else {
        let a = t / peop;
        let b = tot / peop
        tipPerPerson.value = `＄${a.toFixed(2)}`;
        totalPerPerson.value = `＄${b.toFixed(2)}`;
    }
}

