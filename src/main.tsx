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
import { Codex } from "./libs/Codex/types";
import CodexProvider from "./libs/Codex/components/Provider/CodexProvider";

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

const codex: Codex = {
  _index: <Home />,
  new: <New />,
  login: <Login />,
  view: { _index: <div>view</div>, _params: ["wonder_id"] },
  _error: <div>error page</div>,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CodexProvider provider={codex} />,
);
