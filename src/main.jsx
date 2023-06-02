import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../index.css";
import AllMovie from "./components/All Movies/AllMovie";
import Bookings from "./components/Bookings/Bookings";
import Details from "./components/Details/Details";
import Main from "./Main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllMovie />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "bookings/:id",
        element: <Bookings />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
