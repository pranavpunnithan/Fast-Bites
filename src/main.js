import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Body from "./components/Body";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import NotFound from "./components/NotFound";


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
               element: <RestaurantMenu />,
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