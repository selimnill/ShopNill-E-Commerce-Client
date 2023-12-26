import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";


const Cart = ({ setShowCart }) => {
    return <div className="cart-panel">
        <div className="opac-layer">cart</div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-button" onClick={() => setShowCart(false)}>
                    <MdClose />
                    <span className="text">Close</span>
                </span>
            </div>
            <div className="em">
                <BsCartX />
                <span>No producs in the Cart</span>
                <button className="return-cta">RETURN TO SHOP</button>
            </div>
        </div>
    </div>;
};

export default Cart;
