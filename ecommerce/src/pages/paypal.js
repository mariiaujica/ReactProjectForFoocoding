import React, { useRef, useEffect } from "react";
import {GetShoppingAmountOf} from '../shoppingCart';

export default function Paypal(props) {
    const paypal = useRef();

    var products_paypal = [];

    if(Array.isArray(props.products)){
        props.products.map((product, index) => {
            var amount = GetShoppingAmountOf(product.id);
            if (amount > 0 ){
                products_paypal.push(
                    {
                        description: product.title + " x " + amount,
                        amount: {
                            currency_code: "SEK",
                            value: (product.price * amount),
                        },
                    }
                );
            };
            return "";
        });
    };

    console.log(products_paypal);

    useEffect(() => {
        if (products_paypal.length<1)
            return;
        window.paypal
        .Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: products_paypal,
                });
            },
                onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
                onError: (err) => {
                console.log(err);
            },
        })
        .render(paypal.current);
    }, [products_paypal]);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}