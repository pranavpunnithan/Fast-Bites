
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    clearCart,
    increaseQuantity,
    decreaseQuantity
} from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    // Empty Cart UI
    if (cartItems.length === 0) {
        return (
            <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4">

                <div className="text-center max-w-md">

                    <div className="text-7xl mb-6">
                        🛒
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-3">
                        Your Cart is Empty!
                    </h2>

                    <p className="text-gray-500 text-base mb-7">
                        Looks like you haven't added anything delicious yet.
                        Explore our restaurants and find something you love.
                    </p>

                    <Link
                        to="/"
                        className="inline-block bg-orange-500 text-white font-semibold px-7 py-3 rounded-lg hover:bg-orange-600 transition"
                    >
                        Browse Restaurants
                    </Link>

                </div>

            </div>
        );
    }

    // Cart with items
    return (
        <div className="max-w-4xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-8">
                Cart
            </h1>

            <p className="text-lg mb-2">
                Total items: {
                    cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0
                    )
                }
            </p>

            {/* Total Price */}
            <div className="border-t pt-4 mb-6">

                <p className="text-2xl font-bold">
                    Total: ₹
                    {cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                    )}
                </p>

            </div>

            {/* Cart Items */}
            {cartItems.map((item, index) => (

                <div
                    key={`${item.id}-${index}`}
                    className="flex justify-between items-center border border-gray-200 rounded-lg p-4 mb-4"
                >

                    <div>
                        <h3 className="text-lg font-semibold">
                            {item.name}
                        </h3>

                        <p className="text-gray-600 mt-1">
                            Price: ₹{item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-2">

                            <button
                                className="px-3 py-1 bg-gray-500 text-white rounded"
                                onClick={() => dispatch(decreaseQuantity(item.id))}
                            >
                                −
                            </button>

                            <span>
                                Quantity: {item.quantity}
                            </span>

                            <button
                                className="px-3 py-1 bg-green-500 text-white rounded"
                                onClick={() => dispatch(increaseQuantity(item.id))}
                            >
                                +
                            </button>

                        </div>

                    </div>

                </div>

            ))}

            {/* Clear Cart Button */}
            <button
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={() => dispatch(clearCart())}
            >
                Clear Cart
            </button>

        </div>
    );
};

export default Cart;
