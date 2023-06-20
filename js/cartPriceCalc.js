function cartPriceCalc() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceEl = cartWrapper.querySelectorAll('.price__currency'); // find price of item added

    const totalPriceEl = document.querySelector('.total-price');

    let priceTotal = 0;

    priceEl.forEach(function (item) {
        const quantityEl = item.closest('.cart-item').querySelector('[data-counter]'); // find quantity of items added

        priceTotal += parseInt(item.innerText) * parseInt(quantityEl.innerText);
    });
    totalPriceEl.innerText = priceTotal;
}