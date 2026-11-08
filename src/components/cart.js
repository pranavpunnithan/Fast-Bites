import { useDispatch, useSelector } from "react-redux";
import {
    clearCart,
    increaseQuantity,
    decreaseQuantity
} from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    if (cartItems.length === 0) {
    return <h2>Your cart is empty 🛒</h2>;
    }
    return (
        <div className="max-w-4xl mx-auto p-6">
         <h1 className="text-3xl font-bold mb-8">Cart</h1>

            <p className="text-lg mb-2">
            Total items: {
    cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    )
}
            </p> 
     <div className="border-t pt-4 mb-6">
    <p className="text-2xl font-bold">
        Total: ₹
        {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        )}
    </p>
</div>
            {cartItems.map((item, index) => (
                <div key={`${item.id}-${index}`}
                className="flex justify-between items-center border border-gray-200 rounded-lg p-4 mb-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600 mt-1">
                    Price: ₹{item.price}
                    </p>

        <div className="flex items-center gap-3 mt-2">
    <button
        className="px-3 py-1 bg-gray-500 text-white rounded"
        onClick={() => dispatch(decreaseQuantity(item.id))}
    >
        −
    </button>

    <span>Quantity: {item.quantity}</span>

    <button
        className="px-3 py-1 bg-green-500 text-white rounded"
        onClick={() => dispatch(increaseQuantity(item.id))}
    >
        +
    </button>
</div>
                </div>
            ))}

            <button className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => dispatch(clearCart())}>
            Clear Cart
           </button>
        </div>
    );
};

export default Cart;