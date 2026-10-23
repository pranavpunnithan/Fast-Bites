import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
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


root.render(<RouterProvider router={appRouter} />);