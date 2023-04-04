import styles from "./HeaderLogo.module.scss";
import logoMini from "../assets/logo_mini.svg";
import { useNavigate } from "react-router-dom";
export default function HeaderLogo() {
  const navigate = useNavigate();
  return (
    <a className={styles.HeaderLogo} onClick={() => navigate("/")}>
      <img src={logoMini} />
    </a>
  );
}
