// div in cart where products are added
const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) { // find elements with data-card attribute
        const card = event.target.closest('.card'); // find parent el
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText
        }

        const itemInCart = cartWrapper.querySelector(`[data-id = '${productInfo.id}']`); // find item with id in cart
        // if this product is already in the cart
        if (itemInCart) {
            const counterEl = itemInCart.querySelector(('[data-counter'));
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else { // if not
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                            <div class="cart-item__top">
                                <div class="cart-item__img">
                                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                </div>
                                <div class="cart-item__desc">
                                    <div class="cart-item__title">${productInfo.title}</div>
                                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                    <!-- cart-item__details -->
                                    <div class="cart-item__details">

                                        <div class="items items--small counter-wrapper">

                                            <!-- Counter -->
                                            <div class="items__control" data-action="minus">-</div>
                                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                                            <div class="items__control" data-action="plus">+</div>
                                        </div>
                                        <!-- Counter -->

                                        <div class="price">
                                            <div class="price__currency">${productInfo.price}</div>
                                        </div>

                                    </div>
                                    <!-- // cart-item__details -->

                                </div>
                            </div>
                        </div>`;
            // show products in the cart
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
        }
        // reset counter to initial state (1)
        card.querySelector('[data-counter]').innerText = '1';

        // call function to hide or show 'cart is empty' field
        toggleCartStatus();

        //total price in the cart
        cartPriceCalc();
    }
});
