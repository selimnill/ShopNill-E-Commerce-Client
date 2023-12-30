import { useContext } from "react";
import Product from "./Product/Product";
import { Context } from "../../utils/context";
import "./Products.scss";
const Products = ({ products, innerPage, headingText, }) => {

console.log("Data from Products Page", products)


    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                {
                    products?.data?.map((item) => <Product key={item.id} id={item.id} item={item}/>) 
                }
               
            </div>
        </div>
    );
};

export default Products;
