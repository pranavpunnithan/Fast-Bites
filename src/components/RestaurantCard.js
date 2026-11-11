
import { Link } from "react-router-dom";
import { memo } from "react";

const RestaurantCard = memo(({ restaurant }) => {
    return (
        <Link
            to={`/restaurant/${restaurant.id}`}
            className="group block w-full max-w-[280px]"
        >
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                {/* Restaurant Image */}
                <div className="overflow-hidden rounded-lg">
                    <img
                        className="h-[180px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src={restaurant.imageUrl}
                        alt={restaurant.name}
                        loading="lazy"
                        decoding="async"
                        width="300"
                        height="200"
                    />
                </div>

                {/* Restaurant Details */}
                <div className="mt-3">

                    <div className="flex items-center justify-between">
                        <h3 className="truncate text-lg font-bold text-gray-900">
                            {restaurant.name}
                        </h3>

                        <span className="ml-2 shrink-0 rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
                            ⭐ {restaurant.rating}
                        </span>
                    </div>

                    <p className="mt-2 truncate text-sm text-gray-600">
                        {restaurant.cuisine}
                    </p>

                    <p className="mt-2 text-sm font-medium text-gray-500">
                        🕒 {restaurant.deliveryTime}
                    </p>

                </div>
            </div>
        </Link>
    );
});

export default RestaurantCard;
