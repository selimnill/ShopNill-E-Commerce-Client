import { useContext } from "react";
import Product from "./Product/Product";
import { Context } from "../../utils/context";
import "./Products.scss";
const Products = ({ innerPage, headingText, }) => {
    // console.log(products.data[0].attributes.img.data[0].attributes.url)

    const { products } = useContext(Context);

    console.log("This product for Products", products[0]);


    return (
        <div className="products-container">

            {!innerPage && <div className="sec-heading">{headingText}</div>}

            <div className="products">
                {
                    products.map(item => <Product data={item} />) //

                   
                }

                <Product />
            </div>
        </div>
    );
};

export default Products;
