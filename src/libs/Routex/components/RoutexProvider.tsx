import styles from "./RoutexProvider.module.scss";
import { RoutexType } from "../types";
import { useEffect } from "react";
import { useRoutex } from "../hooks/useRoutex";
type Props = {
  provider: RoutexType[];
};
export default function RoutexProvider({ provider }: Props) {
  const { loadProvider } = useRoutex((state) => state.actions);
  useEffect(() => {
    loadProvider(provider);
  }, [provider]);

  return <div></div>;
}
