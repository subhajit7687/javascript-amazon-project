export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach(item => {
        if (item.productId === productId)
            matchingItem = item;
    })

    if (matchingItem)
        matchingItem.quantity++;
    else {
        cart.push({
            productId,
            quantity: 1
        });
    }
    saveToStorage();
}

export function removeItem(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveToStorage();
}