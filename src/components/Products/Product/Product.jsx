import "./Product.scss";
import { useNavigate } from "react-router-dom";

const Product = ({item, id}) => {

    // console.log("Product Data ", item?.attributes?.img?.data[0]?.attributes?.url);
    // console.log("Product Item", item)

    const navigate = useNavigate();

    return (
        <div className="product-card" onClick={() => navigate("/product/"+id)}>
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
