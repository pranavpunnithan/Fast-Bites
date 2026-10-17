import { Link } from "react-router-dom";
const RestaurantCard = ({ restaurant }) => {
    return (
        <Link to={`/restaurant/${restaurant.id}`}>
        <div className="restaurant-card">
            <img
                className="img1"
                src="https://ik.imagekit.io/tvq1ymkssg/FastBites/fastbites.png?updatedAt=1781084343224"
                alt="Restaurant"
            />

            <h3>{restaurant.name}</h3>
            <p>{restaurant.rating}</p>
            <p>{restaurant.cuisine}</p>
            <p>{restaurant.deliveryTime}</p>
        </div>
        </Link>
    );
};

export default RestaurantCard;