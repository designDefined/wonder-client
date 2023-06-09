import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import Home from "./pages/Home/Home";
import New from "./pages/New/New";
import Login from "./pages/Login/Login";
import { Codex } from "./libs/Codex/types";
import CodexProvider from "./libs/Codex/components/Provider/CodexProvider";
import initMocks from "./mocks";
import View from "./pages/View/View";

const codex: Codex = {
  _index: <Home />,
  new: <New />,
  login: <Login />,
  view: { _index: <View />, _params: ["wonder_id"] },
  _error: <div>error page</div>,
};

if (process.env.NODE_ENV === "development") {
  await initMocks();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CodexProvider provider={codex} />,
);
