import { useNavigate } from "react-router-dom"
import './Sucess.scss';

const Sucess = () => {

    const navigate = useNavigate();

    return (
        <div className="success-container">
            <div>
                <h3>Payment Successfull.!</h3>
            </div>
        </div>
    )
};

export default Sucess;