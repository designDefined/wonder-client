import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Codex } from "./libs/Codex/types";
import CodexProvider from "./libs/Codex/components/Provider/CodexProvider";
import initMocks from "./mocks";
import View from "./pages/View/View";
import NewWonderPage from "./pages/new/NewWonder/NewWonderPage";
import NewCreatorPage from "./pages/new/NewCreator/NewCreatorPage";
import CreatorPage from "./pages/Creator/CreatorPage";
import MyPage from "./pages/MyPage/MyPage";
import Register from "./pages/Register/Register";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const codex: Codex = {
  _index: <Home />,
  new: {
    _index: <NewWonderPage />,
    wonder: <NewWonderPage />,
    creator: <NewCreatorPage />,
  },
  login: <Login />,
  register: <Register />,
  view: { _index: <View />, _params: ["wonder_id"] },
  me: { _index: <MyPage /> },
  creator: { _index: <CreatorPage />, _params: ["creator_id"] },
  _error: <div>error page</div>,
};

/*
if (process.env.NODE_ENV === "development") {
  await initMocks();
}
 */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <CodexProvider provider={codex} />
  </QueryClientProvider>,
);
