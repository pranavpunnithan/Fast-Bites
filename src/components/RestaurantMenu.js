import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const [menuData, setMenuData] = useState({});
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        fetch("https://pranavpunnithan.github.io/fastbites-data/menus.json")
            .then((response) => response.json())
            .then((data) => setMenuData(data))
            .catch((error) =>
                console.error("Error fetching menu:", error)
            );

        fetch("https://pranavpunnithan.github.io/fastbites-data/restaurants.json")
            .then((response) => response.json())
            .then((data) => {
                setRestaurantData(data);
            })
            .catch((error) => {
                console.error("Error fetching restaurants:", error);
            });
    }, []);

    const restaurant = restaurantData.find(
        (restaurant) => restaurant.id === Number(id)
    );

    const menuItems = menuData[id] || [];

    const handleAddToCart = (food) => {
        dispatch(addItem(food));
    };

    if (!restaurant) {
        return <h2>Restaurant not found!</h2>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">
                {restaurant.name}
            </h1>

            <p className="text-gray-600 mb-1">
                Rating: ⭐ {restaurant.rating}
            </p>

            <p className="text-gray-600 mb-1">
                Cuisine: {restaurant.cuisine}
            </p>

            <p className="text-gray-600 mb-6">
                Delivery time: {restaurant.deliveryTime}
            </p>

            <h2 className="text-2xl font-bold mb-5">
                Menu
            </h2>

            {menuItems.length === 0 ? (
                <p>Menu coming soon!</p>
            ) : (
                menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border border-gray-200 rounded-lg p-4 mb-4"
                    >
                        <div>
                            <h3 className="text-lg font-semibold">
                                {item.name}
                            </h3>

                            <p className="text-gray-600 mt-1">
                                Price: ₹{item.price}
                            </p>
                        </div>

                        <button
                            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                            onClick={() => handleAddToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default RestaurantMenu;
