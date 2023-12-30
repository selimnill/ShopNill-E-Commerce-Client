import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {

    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);

    }

    let { data } = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)

    if (!query.length) {
        data = null;
    }



    return <div className="search-modal">
        <div className="form-field">
            <input
                type="text"
                autoFocus
                placeholder="Search For Products"
                value={query}
                onChange={onChange}
            />
            <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
            <div className="search-result">
                {
                    data?.data?.map(item => (
                        <div className="search-result-item">
                            <div className="image-container">
                                <img src={prod1} alt="" />
                            </div>
                            <div className="product-details">
                                <span className="name">{item?.attributes?.title}</span>
                                <span className="desc">{item?.attributes?.desc}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>;
};

export default Search;
