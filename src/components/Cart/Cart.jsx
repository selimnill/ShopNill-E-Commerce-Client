import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { useNavigate } from "react-router-dom";


const Cart = ({ setShowCart }) => {

    const {cartItems, cartSubTotal} = useContext(Context);

    const navigate = useNavigate();

    return <div className="cart-panel">
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-button" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>
            {!cartItems.length && <div className="empty-cart">
                <BsCartX />
                <span>No producs in the Cart</span>
                <button className="return-cta" onClick={() => navigate("/")}>RETURN TO SHOP</button>
            </div> }

           {!!cartItems.length && <>
                <CartItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal: </span>
                        <span className="total">&#36; {cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">CheckOut</button>
                    </div>
                </div>
            </>}

        </div>
    </div>;
};

export default Cart;
