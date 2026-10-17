
import { useParams } from "react-router-dom";
import restaurantData from "../data/restaurantData";

const RestaurantMenu = () => {
    const { id } = useParams();

    const restaurant = restaurantData.find(
        (restaurant) => restaurant.id === Number(id)
    );

    if (!restaurant) {
        return <h2>Restaurant not found!</h2>;
    }

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>Rating: {restaurant.rating}</p>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Delivery time: {restaurant.deliveryTime}</p>
        </div>
    );
};

export default RestaurantMenu;
