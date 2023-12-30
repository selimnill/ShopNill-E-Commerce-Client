import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "./api";


export const Context = createContext();

const AppContext = ({ children }) => {

    const [categories, setCategories] = useState();
    const [products, setProducts] = useState([]);



    // console.log("This is products from context", products);

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