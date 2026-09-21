import { useState } from "react";
import restaurantData from "../data/restaurantData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [searchText, setSearchText] = useState("");

    const [filteredRestaurants, setFilteredRestaurants] =
        useState(restaurantData);

    return (
        <div className="body">

            <div className="search">

                <input
                    type="text"
                    placeholder="Search for restaurants..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />

                <button
                    onClick={() => {
                        const results = restaurantData.filter((restaurant) => {
                            return restaurant.name
                                .toLowerCase()
                                .includes(searchText.toLowerCase());
                        });

                        setFilteredRestaurants(results);
                    }}
                >
                    Search
                </button>

            </div>

            <div className="restaurant-container">
                {filteredRestaurants.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant.name}
                            restaurant={restaurant}
                        />
                    );
                })}
            </div>

        </div>
    );
};

export default Body;