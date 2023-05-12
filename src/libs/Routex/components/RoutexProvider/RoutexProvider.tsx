import styles from "./RoutexProvider.module.scss";
import { RoutexType } from "../../types";
import { useEffect } from "react";
import { useRoutex } from "../../hooks/useRoutex";
import { RoutexPageA, RoutexPageB } from "../RoutexPage/RoutexPage";

const synchronizeLocation = () => {};

type Props = {
  provider: RoutexType[];
};

export default function RoutexProvider({ provider }: Props) {
  const { loadProvider, loadIndex, navigate } = useRoutex(
    (state) => state.actions,
  );

  useEffect(() => {
    loadProvider(provider);
    loadIndex(window.location.pathname.slice(1));
    console.log(window.location.pathname.slice(1));
  }, [provider]);

  useEffect(() => {
    console.log("add");
    window.addEventListener("popstate", (e) => {
      const historyState = e.state as { data?: string; idx?: number };
      if (historyState.data) navigate(historyState.data);
      if (historyState.idx && historyState.idx === 0) navigate("");
      console.log(historyState);
    });
  }, []);

  return (
    <div className={styles.RoutexProvider}>
      <RoutexPageA />
      <RoutexPageB />
    </div>
  );
}
