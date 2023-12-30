import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Product = ({data}) => {

    console.log("Product Data ", data?.attributes?.img?.data[0].attributes.url);

    return (
        <div className="product-card">
            <div className="thumbnail">
                {/* <img src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt="" /> */}
                <img src={process.env.REACT_APP_DEV_URL + data?.attributes?.img.data[0].attributes.url} alt="" />
            </div>
            <div className="product-details">
                <span className="name">{data?.attributes?.title}</span>
                <div className="price">$ {data?.attributes?.price}</div>
            </div>
        </div>
    );
};

export default Product;
