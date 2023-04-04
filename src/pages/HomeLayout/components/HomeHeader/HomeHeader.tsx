import styles from "./HomeHeader.module.scss";
import HeaderLogo from "../../../../components/logos/HeaderLogo/HeaderLogo";

export default function HomeHeader() {
  return (
    <header className={styles.HomeHeader}>
      <HeaderLogo />
      <div className={styles.tools}>로그인</div>
    </header>
  );
}
