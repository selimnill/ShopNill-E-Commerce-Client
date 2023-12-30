import "./CartItem.scss";
import { MdClose } from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-1.webp"
import { useContext } from "react";
import { Context } from "../../../utils/context";


const CartItem = () => {

    const { handleRemoveFromCart, cartItems } = useContext(Context);


    return (
        <div className="cart-products">

            {cartItems?.map(item => (
                <div key={item?.id} className="cart-product">
                    <div className="image-container">
                        <img src={process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
                    </div>
                    <div className="product-details">
                        <span className="name">{item?.attributes?.title}</span>
                        <MdClose className="close-btn" />
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <div className="text">
                            <span>3</span>
                            <span>X</span>
                            <span className="highlight">{item?.attributes?.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
