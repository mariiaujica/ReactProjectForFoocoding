import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

import {AddToCart} from '../shoppingCart';

function Products () {
    const params = useParams();
    const productId = params.productid;

    const [currentProduct, setCurrentProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products/'+productId)
            .then(response => response.json())
            .then(data => {
                setCurrentProduct(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [setCurrentProduct]);

    if (typeof currentProduct.product === 'object' && currentProduct.product !== null){
        const product = currentProduct.product;
        const productImage = product.image;
        const productTitle = product.title;
        const productPrice = product.price;
        const productDescription = product.description;

        return(
            <div className="pageContentWrapper">
                <div className="productGallery">
                <img src={productImage} />
                </div>
                <div className="productTextWrapper">
                    <h2 className="productName">{productTitle}</h2>
                    <h2 className="productPrice">{productPrice} SEK</h2>
                    <div className="productShipping">Shipping costs will be calculated at checkout.</div>
                    <div className="productOrderFormWrapper">
                            <button onClick={()=>{
                                AddToCart(productId);
                            }}>Add to Cart</button>
                    </div>
                    <div className="product-description" dangerouslySetInnerHTML={{ __html: productDescription }} />
                </div>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <p>Product not found.</p>
            </div>
        );
    }

    
}
export default Products;