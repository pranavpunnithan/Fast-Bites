import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Cart from "./components/cart";
const RestaurantMenu = lazy(
    () => import("./components/RestaurantMenu")
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Body />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
               path: "restaurant/:id",
               element: (
                <Suspense fallback={<h2>Loading Restaurant</h2>}>
               <RestaurantMenu />
               </Suspense>
               ),
            },
            {
                path:"*",
                element:<NotFound />,
            }
        ],
    },
]);
const root = createRoot(document.getElementById("root"));


root.render(
    <Provider store={appStore}>
        <RouterProvider router={appRouter} />
    </Provider>
);