import "./CartItem.scss";
import {MdClose} from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-1.webp"


const CartItem = () => {
    return <div className="cart-products">
        <div className="cart-product">
            <div className="image-container">
                <img src={prod1} alt="" />
            </div>
            <div className="product-details">
                <spna className="name">Product Nmae</spna>
                <MdClose className="close-btn" />
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>X</span>
                    <span className="highlight">12345</span>
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
