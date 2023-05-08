import styles from "./RoutexProvider.module.scss";
import { RoutexType } from "../../types";
import { useEffect } from "react";
import { useRoutex } from "../../hooks/useRoutex";
import { RoutexPageA, RoutexPageB } from "../RoutexPage/RoutexPage";
type Props = {
  provider: RoutexType[];
};
export default function RoutexProvider({ provider }: Props) {
  const { loadProvider, loadIndex } = useRoutex((state) => state.actions);
  useEffect(() => {
    loadProvider(provider);
    loadIndex("");
  }, [provider]);

  return (
    <div className={styles.RoutexProvider}>
      <RoutexPageA />
      <RoutexPageB />
    </div>
  );
}
