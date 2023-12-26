import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="titile">About</div>
                <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a sed sequi molestiae corporis quisquam obcaecati! Architecto sint fugit ducimus.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Shahid Rafik Road, 27, Dhanmondhi, Dhaka-1303 </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: +88018239705462 </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: contact@shopNill.com </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Pages</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Pages</span>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    SHOPNILL 2024 CREATED BY NILL SOFTWARE SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>;
};

export default Footer;
