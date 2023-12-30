import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Product = ({item, categoryProducts}) => {

    console.log("Product Data ", item?.attributes?.img?.data[0]?.attributes?.url);
    console.log("Product Item", item)

    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
            </div>
            <div className="product-details">
                <span className="name">{item?.attributes?.title}</span>
                <div className="price">$ {item?.attributes?.price}</div>
            </div>
        </div>
    );
};

export default Product;
