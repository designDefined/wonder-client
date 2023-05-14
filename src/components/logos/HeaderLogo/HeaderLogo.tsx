import styles from "./HeaderLogo.module.scss";
import logoMini from "../assets/logo_mini.svg";
import { navigate } from "../../../libs/Codex";
export default function HeaderLogo() {
  return (
    <a className={styles.HeaderLogo} onClick={() => navigate("/")}>
      <img src={logoMini} />
    </a>
  );
}
