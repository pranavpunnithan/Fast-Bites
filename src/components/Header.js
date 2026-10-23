import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useContext } from "react";
import CartContext from "../CartContext";
const Header = () => {
    const isOnline = useOnlineStatus();
    const { cartItems } = useContext(CartContext);
    
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://ik.imagekit.io/tvq1ymkssg/FastBites/logo.jpg"
                    alt="FastBites Logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cuisines</li>
                    <li>Cart ({cartItems.length})</li>
                    <li>{isOnline ? "Online 🟢" : "Offline 🔴"}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;