import './shop.css';
import ShopProduct from './shopProduct';
import { useState, useEffect } from 'react';


function Shop () {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [setProducts]);

    return <div>
        <h2 id="shopTitle">Shop</h2>
        <div className="product-list">
            { Array.isArray(products.products)?
                products.products.map((product, index) => {
                return (
                    <ShopProduct productid={product.id} image={product.image} title={product.title} price={product.price}/>
                );
            }) : "Error connecting API: " + typeof products + " --- " + JSON.stringify(products)}
        </div>
    </div>
}
export default Shop;