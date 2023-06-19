// find elements on the page
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

// track Minus button clicks
btnMinus.addEventListener('click', function () {
    if (parseInt(counter.innerText) > 1) { // counter should be more than 1 to be decremented
        counter.innerText = --counter.innerText;
    }

});
// track Plus button clicks
btnPlus.addEventListener('click', function () {
    counter.innerText = ++counter.innerText;
});

