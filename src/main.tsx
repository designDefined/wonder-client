import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import Home from "./pages/Home/Home";
import New from "./pages/New/New";
import Login from "./pages/Login/Login";
import { Codex } from "./libs/Codex/types";
import CodexProvider from "./libs/Codex/components/Provider/CodexProvider";

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
