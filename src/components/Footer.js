

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-200">

            <div className="max-w-7xl mx-auto px-6 py-8">

                <div className="flex flex-col sm:flex-row justify-between gap-6">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-orange-600">
                            FastBites 
                        </h2>

                        <p className="text-gray-600 mt-2 text-sm">
                            Delicious food, delivered to your doorstep.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-wrap items-center gap-6">

                        <Link to="/" className="text-gray-700 hover:text-orange-500 transition">
                            Home
                        </Link>

                        <Link to="/contact" className="text-gray-700 hover:text-orange-500 transition">
                            Contact Us
                        </Link>

                        <Link to="/cart" className="text-gray-700 hover:text-orange-500 transition">
                            Cart
                        </Link>

                    </div>

                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-7 pt-5 text-center">

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} FastBites. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;

