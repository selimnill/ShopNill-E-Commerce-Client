import "./Search.scss";
import { MdClose } from "react-icons/md";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";

const Search = ({ setShowSearch }) => {
    return <div className="search-modal">
        <div className="form-field">
            <input
                type="text"
                autoFocus
                placeholder="Search For Products"

            />
            <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
        </div>
        <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item">
                    <div className="image-container">
                        <img src={prod1} alt="" />
                    </div>
                    <div className="product-details">
                        <span className="name">Product Name</span>
                        <span className="desc">Product Desc</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
