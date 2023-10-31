import ReactDOM from "react-dom/client";
import "./index.scss";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Codex } from "./libs/Codex/types";
import CodexProvider from "./libs/Codex/components/Provider/CodexProvider";
import View from "./pages/View/View";
import NewWonderPage from "./pages/new/NewWonder/NewWonderPage";
import NewCreatorPage from "./pages/new/NewCreator/NewCreatorPage";
import CreatorPage from "./pages/Creator/CreatorPage";
import Register from "./pages/Register/Register";
import Liked from "./pages/Me/Liked/Liked";
import Reserved from "./pages/Me/Reserved/Reserved";
import Wonders from "./pages/Wonders/Wonders";
import Dev from "./pages/Dev/Dev";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Me from "./pages/Me/Me";
import Search from "./pages/Search/Search";
import Modify from "./pages/Me/Modify/Modify";
import Name from "./pages/Me/Modify/Name/Name";
import Phone from "./pages/Me/Modify/Phone/Phone";

const codex: Codex = {
  _index: <Home />,
  new: {
    _index: <NewWonderPage />,
    wonder: <NewWonderPage />,
    creator: <NewCreatorPage />,
  },
  login: <Login />,
  register: <Register />,
  search: <Search />,
  wonders: <Wonders />,
  view: { _index: <View />, _params: ["wonder_id"] },
  me: {
    _index: <Me />,
    liked: <Liked />,
    reserved: <Reserved />,
    modify: { _index: <Modify />, name: <Name />, phone: <Phone /> },
  },
  creator: { _index: <CreatorPage />, _params: ["creator_id"] },
  dev: <Dev />,
  _error: <div>error page</div>,
};

const queryClient = new QueryClient();
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
