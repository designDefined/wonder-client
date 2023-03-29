import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dev from "./pages/NoLayout/Dev/Dev";
import HomeLayout from "./pages/HomeLayout/HomeLayout";
import New from "./pages/HomeLayout/New/New";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>errorLayout</div>,
    children: [
      {
        path: "home",
        element: <div>home</div>,
        index: true,
      },
      { path: "new", element: <New /> },
    ],
  },
  { path: "login", element: <div>login</div> },
  { path: "register", element: <div>register</div> },
  { path: "dev", element: <Dev /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
