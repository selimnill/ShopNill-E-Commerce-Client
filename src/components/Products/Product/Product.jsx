import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={prod} alt="" />
        </div>
        <div className="product-details">
            <span className="name">Product Name</span>
            <div className="price">$ 499</div>
        </div>
    </div>;
};

export default Product;
