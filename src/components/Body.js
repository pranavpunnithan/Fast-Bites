import { useEffect,useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
   
    const [searchText, setSearchText] = useState("");
    

    const [restaurantData,setRestaurantData]=useState([]);
   

    const [filteredRestaurants, setFilteredRestaurants] =
        useState([]);
      const [isLoading,setIsLoading]=useState(true);
    
    useEffect(()=>{
        fetch("https://pranavpunnithan.github.io/fastbites-data/restaurants.json")
        .then((response)=>response.json())
        .then((data)=>{
            setRestaurantData(data);
            setFilteredRestaurants(data);
            setIsLoading(false);
        })
        .catch((error)=>{
            console.log("Error fetching Restsurants",error);
            setIsLoading(false);
        });
    },[]);
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
    {isLoading ? (
        <Shimmer />
    ) : (
        filteredRestaurants.map((restaurant) => {
            return (
                <RestaurantCard
                    key={restaurant.name}
                    restaurant={restaurant}
                />
            );
        })
    )}
</div>

        </div>
    );
};

export default Body;