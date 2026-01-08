const getCartFromLocalStorage =() =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        const storeCart = JSON.parse(storedCartString);
        return storeCart;
    }
    return [];
}

const saveCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addItemToCartLocalStorage = id =>{
    const cart = getCartFromLocalStorage();
    const newcart = [...cart,id];
    cart.push(id);

    //save new cart to the local storage
    saveCartToLocalStorage(newcart)

}

export{
    getCartFromLocalStorage as getStoreCart,
    addItemToCartLocalStorage as addToStoredCart}

