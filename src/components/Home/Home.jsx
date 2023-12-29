import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { fetchDataFromAPI } from "../../utils/api.js";
import { Context } from "../../utils/context.js";


const Home = () => {

    const { categories, setCategories, products, setProducts } = useContext(Context);

    useEffect(() => {
        
        getCategories();
        getProducts();

    }, [])


    const getProducts = () => {
        fetchDataFromAPI("/api/products?populate=*").then(res => {
            setProducts(res);
            console.log(res);
        });
    }
    const getCategories = () => {
        fetchDataFromAPI("/api/categories?populate=*").then(res => {
            setCategories(res);
            console.log(res);
        })
    }


    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category
                        categories={categories}
                        headingText={"Categories"}
                        innerPage={true}
                    />
                    <Products
                        products={products}
                        headingText="Popular Products"
                    />

                </div>
            </div>
        </div>
    );
};

export default Home;
