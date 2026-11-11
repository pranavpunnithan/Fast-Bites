import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const isOnline = useOnlineStatus();
    const cartItems = useSelector((state) => state.cart);

    return (
        <div className="flex justify-between items-center w-full min-h-20 bg-white border-b border-gray-200 shadow-sm px-4 sm:px-6">

            {/* Logo */}
            <div className="flex items-center shrink-0">
                <Link to="/">
                    <img
                        className="w-[90px] sm:w-[100px] h-[70px] object-contain block"
                        src="https://ik.imagekit.io/tvq1ymkssg/FastBites/logo.jpg"
                        alt="FastBites Logo"
                    />
                </Link>
            </div>

            {/* Navigation */}
            <div className="ml-auto">
                <ul className="flex items-center gap-1 sm:gap-4 list-none text-sm sm:text-base md:text-lg font-medium m-0 p-0">

                    <li>
                        <Link
                            className="px-2 py-2 hover:text-orange-500 transition-colors"
                            to="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="px-2 py-2 hover:text-orange-500 transition-colors"
                            to="/cart"
                        >
                        🛒 Cart ({cartItems.length})
                        </Link>
                    </li>

                    <li>
                        <Link
                            className="px-2 py-2 hover:text-orange-500 transition-colors"
                            to="/contact"
                        >
                            Contact Us
                        </Link>
                    </li>

                    <li>
                        <span className={`whitespace-nowrap rounded-full px-2 py-1 text-xs sm:text-sm font-semibold ${
                            isOnline
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}>
                            {isOnline ? "Online 🟢" : "Offline 🔴"}
                        </span>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Header;