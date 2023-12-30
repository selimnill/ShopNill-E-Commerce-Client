import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "./api";


export const Context = createContext();

const AppContext = ({ children }) => {

    const [categories, setCategories] = useState();
    const [products, setProducts] = useState([]);



    // useEffect(() => {

    //     // getProducts();

    //     fetchDataFromAPI("/api/products?populate=*").then(res => {
    //         setProducts(res?.data);
    //         console.log("setProduct response", res?.data);
    //     });

    // }, [])





    console.log("This is products from context", products);

    return (
        <Context.Provider
            value={{
                categories,
                setCategories,
                products,
                setProducts,
            }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;