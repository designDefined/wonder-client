import styles from "./HomeLayout.module.scss";
import { Outlet } from "react-router-dom";
import HomeHeader from "./components/HomeHeader/HomeHeader";

export default function HomeLayout() {
  return (
    <div className={styles.HomeLayout}>
      <HomeHeader />
      <Outlet />
    </div>
  );
}
