

function ShopProduct(props) {
    return <div className="product">
        <a href={"/product/" + props.productid}>
        <div className="product-img">
            <img src={props.image} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.price} SEK</p>
        </a>
    </div>
}
export default ShopProduct;