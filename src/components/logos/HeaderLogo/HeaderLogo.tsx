import styles from "./HeaderLogo.module.scss";
import logoMini from "../assets/logo_mini.svg";
import { useNavigate } from "react-router-dom";
import { useRoutex } from "../../../libs/Routex/hooks/useRoutex";
export default function HeaderLogo() {
  const { navigate } = useRoutex((state) => state.actions);
  return (
    <a className={styles.HeaderLogo} onClick={() => navigate("/")}>
      <img src={logoMini} />
    </a>
  );
}
