import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dev from "./pages/noLayout/Dev/Dev";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        homeLayout <Outlet />
      </div>
    ),
    errorElement: <div>errorLayout</div>,
    children: [
      {
        path: "home",
        element: <div>home</div>,
        index: true,
      },
      { path: "new", element: <div>new</div> },
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
