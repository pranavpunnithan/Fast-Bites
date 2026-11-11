
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState("");
    const [selectedCuisine, setSelectedCuisine] = useState("All");
    const [minimumRating, setMinimumRating] = useState("0");
    const [maximumDeliveryTime, setMaximumDeliveryTime] = useState("0");

    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Number of restaurants currently visible
    const [visibleCount, setVisibleCount] = useState(8);

    // Reference for our bottom marker
    const loaderRef = useRef(null);

    /*
    AUTOCOMPLETE SEARCH SUGGESTIONS:
    Check whether the user has entered text using trim().
    If text exists, filter restaurantData to find matching restaurants.
    Convert both restaurant names and user input to lowercase for case-insensitive comparison.
    includes() checks whether the restaurant name contains the search text.
    filter() keeps only matching restaurant objects.
    slice(0, 5) returns a maximum of five matching restaurants.
    If the search input is empty, return an empty array.
    */

    const suggestions = searchText.trim()
        ? restaurantData
            .filter((restaurant) =>
                restaurant.name
                    .toLowerCase()
                    .includes(searchText.trim().toLowerCase())
            )
            .slice(0, 5)
        : [];

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


    // Reset search and all filters when navigating Home
    useEffect(() => {

        setSearchText("");
        setSelectedCuisine("All");
        setMinimumRating("0");
        setMaximumDeliveryTime("0");

        setFilteredRestaurants(restaurantData);
        setVisibleCount(8);

    }, [location.key, restaurantData]);


    // COMBINED FILTERING: Cuisine, Rating and Delivery Time
    useEffect(() => {

        // Wait until restaurant data has loaded
        if (isLoading) return;

        const results = restaurantData.filter((restaurant) => {

            // 1. Check Cuisine
            const matchesCuisine =
                selectedCuisine === "All" ||
                restaurant.cuisine
                    .toLowerCase()
                    .includes(selectedCuisine.toLowerCase());


            // 2. Check Rating
            const restaurantRating = parseFloat(restaurant.rating);

            const matchesRating =
                restaurantRating >= Number(minimumRating);


            // 3. Check Delivery Time
            const restaurantTime = parseInt(
                restaurant.deliveryTime,
                10
            );

            const matchesDeliveryTime =
                maximumDeliveryTime === "0" ||
                restaurantTime <= Number(maximumDeliveryTime);


            // All three filter conditions must be true
            return (
                matchesCuisine &&
                matchesRating &&
                matchesDeliveryTime
            );

        });

        setFilteredRestaurants(results);
        setVisibleCount(8);

    }, [
        restaurantData,
        selectedCuisine,
        minimumRating,
        maximumDeliveryTime,
        isLoading
    ]);


    // Infinite scrolling
    useEffect(() => {

        // Wait until restaurant data has loaded
        if (isLoading) return;

        const observer = new IntersectionObserver(
            (entries) => {

                if (entries[0].isIntersecting) {

                    setVisibleCount((prev) =>
                        Math.min(prev + 8, filteredRestaurants.length)
                    );

                }

            },
            {
                rootMargin: "150px",
            }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            observer.disconnect();
        };

    }, [isLoading, filteredRestaurants.length]);


    return (

        <div className="body min-h-screen bg-gray-50">

            {/* Search Section */}
            <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">

                <h2 className="text-2xl font-bold text-gray-800 mb-5">
                    Discover Restaurants 🍽️
                </h2>

                <div className="flex max-w-xl gap-3">

                    {/* Search Input and Suggestions */}
                    <div className="relative flex-1 min-w-0">

                        <input
                            type="text"
                            placeholder="Search for restaurants..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                        />

                        {/* Suggestions Dropdown */}
                        {suggestions.length > 0 && (

                            <div className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">

                                {suggestions.map((restaurant) => (

                                    <button
                                        key={restaurant.id}
                                        type="button"
                                        onClick={() =>
                                            navigate(`/restaurant/${restaurant.id}`)
                                        }
                                        className="block w-full px-4 py-3 text-left hover:bg-gray-100"
                                    >
                                        {restaurant.name}
                                    </button>

                                ))}

                            </div>

                        )}

                    </div>

                    {/* Search Button - Existing independent search */}
                    <button
                        onClick={() => {

                            const results = restaurantData.filter((restaurant) => {

                                return restaurant.name
                                    .toLowerCase()
                                    .includes(searchText.trim().toLowerCase());

                            });

                            setFilteredRestaurants(results);
                            setVisibleCount(8);

                        }}
                        className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                    >
                        Search
                    </button>

                </div>


                {/* Restaurant Filters */}
                <div className="mt-5 flex flex-row flex-wrap items-end gap-4">

                    {/* Cuisine Filter */}
                    <div className="w-[200px] shrink-0">

                        <label className="block mb-2 font-semibold">
                            Select Cuisine
                        </label>

                        <select
                            value={selectedCuisine}
                            onChange={(e) => setSelectedCuisine(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-white"
                        >
                            <option value="All">All Cuisines</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Fast Food">Fast Food</option>
                            <option value="Burger">Burger</option>
                            <option value="Italian">Italian</option>
                            <option value="American">American</option>
                            <option value="Indian">Indian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Biryani">Biryani</option>
                            <option value="Desserts">Desserts</option>
                            <option value="South Indian">South Indian</option>
                            <option value="Coffee">Coffee</option>
                        </select>

                    </div>


                    {/* Rating Filter */}
                    <div className="w-[200px] shrink-0">

                        <label className="block mb-2 font-semibold">
                            Minimum Rating
                        </label>

                        <select
                            value={minimumRating}
                            onChange={(e) => setMinimumRating(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-white"
                        >
                            <option value="0">Any Rating</option>
                            <option value="4.0">4.0 and above</option>
                            <option value="4.2">4.2 and above</option>
                            <option value="4.4">4.4 and above</option>
                        </select>

                    </div>


                    {/* Delivery Time Filter */}
                    <div className="w-[200px] shrink-0">

                        <label className="block mb-2 font-semibold">
                            Delivery Time
                        </label>

                        <select
                            value={maximumDeliveryTime}
                            onChange={(e) => setMaximumDeliveryTime(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-3 py-3 bg-white"
                        >
                            <option value="0">Any Delivery Time</option>
                            <option value="20">20 minutes or less</option>
                            <option value="25">25 minutes or less</option>
                            <option value="30">30 minutes or less</option>
                            <option value="35">35 minutes or less</option>
                            <option value="40">40 minutes or less</option>
                        </select>

                    </div>

                </div>

            </div>


            {/* Restaurant Grid */}
            <div className="w-full max-w-7xl mx-auto px-4 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">

                {isLoading ? (

                    <Shimmer />

                ) : (

                    filteredRestaurants
                        .slice(0, visibleCount)
                        .map((restaurant) => (

                            <RestaurantCard
                                key={restaurant.id}
                                restaurant={restaurant}
                            />

                        ))

                )}

                {/* Bottom marker for infinite scrolling */}
                <div
                    ref={loaderRef}
                    className="col-span-full w-full h-5"
                ></div>

            </div>

        </div>
    );
};

export default Body;
