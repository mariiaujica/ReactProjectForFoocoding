
function GetShoppingCart(){
    var shoppingcartdata = sessionStorage.getItem("shopping_cart");
    var shoppingcart;

    if (typeof(shoppingcartdata) == "undefined" || shoppingcartdata=="undefined"){
        shoppingcart = [];
    }
    else
    {
        shoppingcart = JSON.parse(shoppingcartdata);
    }

    return shoppingcart;
}

function AddToCart(newProductID){
    var shoppingcart = GetShoppingCart();

    var found = false;
    shoppingcart.forEach(cartEntry => {
        if(cartEntry.productID == newProductID){
            cartEntry.amount++;
            found = true;
        }
    });

    if (!found){
        var cartEntry = {
            productID : newProductID,
            amount:1
        };
        shoppingcart.push(cartEntry);
    }
    
    sessionStorage.setItem("shopping_cart", JSON.stringify(shoppingcart));
    UpdateShoppingCountState();
    return false;
}

function EmptyShoppingCart(){
    sessionStorage.setItem("shopping_cart", undefined);
    UpdateShoppingCountState();
}

function CountItemsShoppingCart(){
    var shoppingcart = GetShoppingCart();
    var count = 0;
    if (shoppingcart){
        shoppingcart.forEach(cartEntry => {
            count = count + cartEntry.amount;
        });
        return count;
    }
    return 0;
}

function UpdateShoppingCountState(){
    const event = new Event('updateShoppingCount');
    document.dispatchEvent(event);
}

function GetShoppingAmountOf(newProductID){
    var shoppingcart = GetShoppingCart();
    var amount=0;
    shoppingcart.forEach(cartEntry => {
        if(cartEntry.productID == newProductID){
            amount = cartEntry.amount;
        }
    });
    return amount;
}

function RemoveCharacter(productIDtoRemove){
    var shoppingcart = GetShoppingCart();
    const indexOfObject = shoppingcart.findIndex(cartEntry => {
        return cartEntry.productID === productIDtoRemove;
    });
    console.log(indexOfObject);
    
    shoppingcart.splice(indexOfObject, 1);
    sessionStorage.setItem("shopping_cart", JSON.stringify(shoppingcart));
    UpdateShoppingCountState();
}


export {AddToCart, GetShoppingCart, EmptyShoppingCart, CountItemsShoppingCart, GetShoppingAmountOf, RemoveCharacter};