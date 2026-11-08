import { useEffect, useState, useRef } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [searchText, setSearchText] = useState("");

    const [restaurantData, setRestaurantData] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    // Number of restaurants currently visible
    const [visibleCount, setVisibleCount] = useState(6);

    // Reference for our bottom marker
    const loaderRef = useRef(null);


    // Fetch restaurant data
    useEffect(() => {

        fetch("https://pranavpunnithan.github.io/fastbites-data/restaurants.json")

            .then((response) => response.json())

            .then((data) => {
                setRestaurantData(data);
                setFilteredRestaurants(data);
                setIsLoading(false);
            })

            .catch((error) => {
                console.log("Error fetching Restaurants", error);
                setIsLoading(false);
            });

    }, []);


    // Infinite scrolling
    useEffect(() => {

        // Create an IntersectionObserver.
        // It watches our bottom marker.
        const observer = new IntersectionObserver((entries) => {
              console.log(
            "Observer:",
            entries[0].isIntersecting
        );

            // If the bottom marker becomes visible,
            // show 6 more restaurants.
            if (entries[0].isIntersecting) {
                console.log("BOTTOM MARKER DETECTED");
                setVisibleCount((prev) => prev + 6);
            }

        });


        // Check whether the bottom marker exists.
        if (loaderRef.current) {

            // Tell the observer to watch the bottom marker.
            observer.observe(loaderRef.current);
        }


        // Cleanup function.
        // Stop watching when React cleans up this effect.
        return () => {
            observer.disconnect();
        };

    }, []);

return (
    <div className="body min-h-screen bg-gray-50">

        {/* Search Section */}
        <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">

            <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Discover Restaurants 🍽️
            </h2>

            <div className="flex max-w-xl gap-3">

                <input
                    type="text"
                    placeholder="Search for restaurants..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="flex-1 min-w-0 rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
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
                    className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                    Search
                </button>

            </div>
        </div>


        {/* Restaurant Grid */}
        <div className="w-full max-w-7xl mx-auto px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">

            {isLoading ? (
                <Shimmer />
            ) : (
                filteredRestaurants
                    .slice(0, visibleCount)
                    .map((restaurant) => {
                        return (
                            <RestaurantCard
                                key={restaurant.name}
                                restaurant={restaurant}
                            />
                        );
                    })
            )}

            {/* Bottom marker */}
            <div ref={loaderRef} style={{ height: "20px" }}></div>

        </div>

    </div>
);
};

export default Body;