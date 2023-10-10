import styles from "./CodexProvider.module.scss";
import { Codex } from "../../types";
import { navigate, useCodex } from "../../index";
import { useEffect } from "react";
import { CodexWrapperA, CodexWrapperB } from "../Wrapper/CodexWrapper";
import BottomTray from "../../../Tray/BottomTray";

type Props = {
  provider: Codex;
};

export default function CodexProvider({ provider }: Props) {
  const provide = useCodex((state) => state.provide);

  useEffect(() => {
    provide(provider);
  }, [provider]);

  return (
    <div className={styles.CodexProvider}>
      <CodexWrapperA />
      <CodexWrapperB />
      <BottomTray />
    </div>
  );
}
