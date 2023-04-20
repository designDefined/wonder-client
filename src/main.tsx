import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout/HomeLayout";
import Home from "./pages/HomeLayout/Home/Home";
import New from "./pages/HomeLayout/New/New";
import Dev from "./pages/NoLayout/Dev/Dev";
import Login from "./pages/HomeLayout/Login/Login";
import LoggingIn from "./pages/NoLayout/LoggingIn/LoggingIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>errorLayout</div>,
    children: [
      {
        path: "home",
        element: <Home />,
        index: true,
      },
      { path: "new", element: <New /> },
      { path: "login", element: <Login /> },
    ],
  },
  { path: "register", element: <div>register</div> },
  { path: "dev", element: <Dev /> },
  { path: "naver", element: <LoggingIn provider={"naver"} /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
