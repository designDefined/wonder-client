import styles from "./Home.module.scss";
import { useMyAccountStore } from "../../store/account/useMyAccountStore";
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader";
import PromotionBanner from "../../components/Home/PromotionBanner/PromotionBanner";
import AboutWonder from "../../components/Home/AboutWonder/AboutWonder";
import RecentEvent from "../../components/Home/RecentEvent/RecentEvent";

export default function Home() {
  const isLoggedIn = useMyAccountStore((state) => state.isLoaded);
  return (
    <main className={styles.Home}>
      <HomeHeader />
      <PromotionBanner />
      {!isLoggedIn && <AboutWonder />}
      <RecentEvent />
    </main>
  );
}
