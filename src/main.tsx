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
import { RoutexType } from "./libs/Routex/types";
import RoutexProvider from "./libs/Routex/components/RoutexProvider/RoutexProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>errorLayout</div>,
    children: [
      {
        path: "/",
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

const routex: RoutexType[] = [
  {
    path: "",
    component: <Home />,
  },
  { path: "login", component: <Login /> },
  { path: "new", component: <New /> },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RoutexProvider provider={routex} />,
);
