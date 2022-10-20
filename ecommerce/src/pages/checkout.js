import './checkout.css';
import { useState, useEffect } from 'react';
import {GetShoppingAmountOf} from '../shoppingCart';
import CheckOutProduct from './CheckOutProduct';
import Paypal from './paypal';

function Checkout () {
    const [products, setProducts] = useState([]);
    const [paypalReady, setPaypalReady] = useState(false);

    useEffect(() => {
        fetch('https://tottifrutti.onrender.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setPaypalReady(true);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [setProducts]);

    var totalPrice = 0;

    return <div>
        <h2 id="shopTitle">Checkout</h2>
        <div className="product-list">
            { 
            Array.isArray(products.products)?
                products.products.map((product, index) => {
                    var amount = GetShoppingAmountOf(product.id);
                    if (amount > 0 ){
                        totalPrice = totalPrice + product.price*amount;
                        return (
                            <CheckOutProduct productid={product.id} image={product.image} title={product.title} price={product.price} amount={amount}/>
                        );
                    }
                    return "";
            }) : "Error connecting API: " + typeof products + " --- " + JSON.stringify(products)}
        </div>
        <div className="checkoutTotal">VAT(included): {Math.round(totalPrice*0.25)} SEK</div>
        <div className="checkoutTotal">Total Price: {totalPrice} SEK</div>
        <div className="checkoutPaypal">
            {paypalReady?<Paypal products={products.products} />:""}
        </div>
    </div>
}

export default Checkout;