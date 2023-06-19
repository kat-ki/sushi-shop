// add listener to entire window

window.addEventListener('click', function (event) {
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (event.target.dataset.action === 'plus') { // check if clicked element is Plus button - from parent element to child element
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') { // check if clicked element is Minus button - from parent element to child element
        if (parseInt(counter.innerText) > 1) { // counter should be more than 1 to be decremented
            counter.innerText = --counter.innerText;
        }
    }
});
