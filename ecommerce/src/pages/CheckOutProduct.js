import {RemoveCharacter} from '../shoppingCart';

function CheckOutProduct(props) {
    return <div className="product">
        <a href={"/product/" + props.productid}>
        <div className="product-img">
            <img alt="product" src={props.image} />
        </div>
        <h3>{props.amount} x {props.title}</h3>
        <p>{props.price} SEK</p>
        </a>
        <button onClick={(e) => {
            RemoveCharacter(props.productid);
            window.location.reload(false);
            }}>X</button>
    </div>
}
export default CheckOutProduct;