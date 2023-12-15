import styles from "./CodexProvider.module.scss";
import { Codex } from "../../types";
import { navigate, useCodex } from "../../index";
import { useEffect } from "react";
import { CodexWrapperA, CodexWrapperB } from "../Wrapper/CodexWrapper";
import BottomTray from "../../../Tray/BottomTray";

type Props = {
  provider: Codex;
};

let vh = 0;

export default function CodexProvider({ provider }: Props) {
  const provide = useCodex((state) => state.provide);

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
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
