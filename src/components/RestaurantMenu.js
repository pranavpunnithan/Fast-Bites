
import { useContext } from "react";
import CartContext from "../CartContext";
import { useParams } from "react-router-dom";
import restaurantData from "../data/restaurantData";
import menuData from "../data/menuData";

const RestaurantMenu = () => {
    const { id } = useParams();

    const {cartItems,setCartItems} = useContext(CartContext);

    const restaurant = restaurantData.find(
        (restaurant) => restaurant.id === Number(id)
    );

    const menuItems = menuData[id] || [];

    const handleAddToCart = (food) => {
        setCartItems((oldCart) => [
            ...oldCart,
            food
        ]);
    };
    
/*
FIRST CLICK — Pizza 🍕

1. You click Pizza.
2. The Pizza object enters handleAddToCart through the parameter `food`.
3. setCartItems receives an updater function.
4. React passes the existing cart to `oldCart`. Initially, it is an empty array [].
5. [...oldCart, food] creates a new array containing Pizza.
6. React updates cartItems with that new array.

Now the cart contains Pizza.


SECOND CLICK — Burger 🍔

1. You click Burger, so `food` receives the Burger object.
2. React passes the existing cart, which contains Pizza, to `oldCart`.
3. ...oldCart copies Pizza into a new array.
4. `food` adds Burger to that same new array.
5. React updates cartItems with the resulting array.

Now the cart contains Pizza and Burger.
*/

    const handleClearCart = () => {
        setCartItems([]);
    };

    if (!restaurant) {
        return <h2>Restaurant not found!</h2>;
    }

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>Rating: {restaurant.rating}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Delivery time: {restaurant.deliveryTime}</p>

            <h2>Menu</h2>

            {menuItems.length === 0 ? (
                <p>Menu coming soon!</p>
            ) : (
                menuItems.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: ₹{item.price}</p>

                        <button
                            onClick={() => handleAddToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))
            )}

            <hr />

            <h2>Cart ({cartItems.length})</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <p key={`${item.id}-${index}`}>
                            {item.name} — ₹{item.price}
                        </p>
                    ))}

                    <h3>
                        Total: ₹
                        {cartItems.reduce(
                            (total, item) => total + item.price,
                            0
                        )}
                    </h3>

                    <button onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
};

export default RestaurantMenu;
