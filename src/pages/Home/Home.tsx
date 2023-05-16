import styles from "./Home.module.scss";
import { useMyAccountStore } from "../../store/account/useMyAccountStore";
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader";
import PromotionBanner from "../../components/Home/PromotionBanner/PromotionBanner";
import AboutWonder from "../../components/Home/AboutWonder/AboutWonder";

export default function Home() {
  const isLoggedIn = useMyAccountStore((state) => state.isLoaded);
  return (
    <main className={styles.Home}>
      <HomeHeader />
      <PromotionBanner />
      <AboutWonder />
      <div className={styles.recentPost}>
        <h2 className={styles.label}>최근 올라온 이벤트</h2>
        <div className={styles.carousel}>
          <div className={styles.post}></div>
        </div>
      </div>
    </main>
  );
}
