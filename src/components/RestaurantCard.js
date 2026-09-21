const RestaurantCard = ({ restaurant }) => {
    return (
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
    );
};

export default RestaurantCard;