import { Link } from "react-router-dom";

const Header = () => {
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
                    
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;