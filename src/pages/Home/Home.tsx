import styles from "./Home.module.scss";
import { useMyAccountStore } from "../../store/account/useMyAccountStore";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import PromotionBanner from "../../components/Home/PromotionBanner/PromotionBanner";
import AboutWonder from "../../components/Home/AboutWonder/AboutWonder";
import RecentEvent from "../../components/Home/RecentEvent/RecentEvent";
import creatorGuide from "../../assets/illustration/creator_guide.png";
import instagram from "../../assets/illustration/instagram.png";
import { useEffect } from "react";
import api from "../../api";
import Overlay from "../../components/Overlay/Overlay";

const sampleBanners: { id: number; alt: string; thumbnail: string }[] = [
  {
    id: 0,
    alt: "alt",
    thumbnail: "/src/assets/sample/promotion_banner_sample.png",
  },
  {
    id: 1,
    alt: "alt",
    thumbnail: "/src/assets/sample/promotion_banner_sample.png",
  },
  {
    id: 2,
    alt: "alt",
    thumbnail: "/src/assets/sample/promotion_banner_sample.png",
  },
  {
    id: 3,
    alt: "alt",
    thumbnail: "/src/assets/sample/promotion_banner_sample.png",
  },
  {
    id: 4,
    alt: "alt",
    thumbnail: "/src/assets/sample/promotion_banner_sample.png",
  },
];

export default function Home() {
  const myAccount = useMyAccountStore((state) => state.data);

  useEffect(() => {
    api.get("/ping").then((res) => console.log(res));
  }, []);

  return (
    <main className={styles.Home}>
      <DefaultHeader />
      <PromotionBanner bannerData={sampleBanners} />
      {!myAccount && <AboutWonder />}
      <RecentEvent />
      <div className={styles.banners}>
        <a className={styles.miniBanner}>
          <img className={styles.background} src={instagram} />
          원더 인스타그램 <br />
          보러 가기
        </a>
        <a className={styles.miniBanner}>
          <img className={styles.background} src={creatorGuide} />
          원더 창작자 가이드 <br />
          보러 가기
        </a>
      </div>
      <Overlay />
    </main>
  );
}
