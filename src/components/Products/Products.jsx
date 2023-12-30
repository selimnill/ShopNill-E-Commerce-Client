import { useContext } from "react";
import Product from "./Product/Product";
import { Context } from "../../utils/context";
import "./Products.scss";
const Products = ({ products, innerPage, headingText, }) => {




    return (
        <div className="products-container">

            {!innerPage && <div className="sec-heading">{headingText}</div>}

            <div className="products">
                {
                    products?.data.map(item => <Product data={item} />) //
                }

                <Product />
            </div>
        </div>
    );
};

export default Products;
