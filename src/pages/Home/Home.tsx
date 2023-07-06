import styles from "./Home.module.scss";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import PromotionBanner from "../../components/Home/PromotionBanner/PromotionBanner";
import AboutWonder from "../../components/Home/AboutWonder/AboutWonder";
import RecentEvent from "../../components/Home/RecentEvent/RecentEvent";
import creatorGuide from "/assets/illustration/creator_guide.png";
import instagram from "/assets/illustration/instagram.png";
import { useAccount } from "../../store/account/useAccount";

const sampleBanners: { id: number; alt: string; thumbnail: string }[] = [
  {
    id: 0,
    alt: "alt",
    thumbnail: "/assets/sample/promotion_banner_sample.png",
  },
  {
    id: 1,
    alt: "alt",
    thumbnail: "/assets/sample/promotion_banner_sample.png",
  },
  {
    id: 2,
    alt: "alt",
    thumbnail: "/assets/sample/promotion_banner_sample.png",
  },
  {
    id: 3,
    alt: "alt",
    thumbnail: "/assets/sample/promotion_banner_sample.png",
  },
  {
    id: 4,
    alt: "alt",
    thumbnail: "/assets/sample/promotion_banner_sample.png",
  },
];

export default function Home() {
  const myAccount = useAccount((state) => state.user);

  return (
    <>
      <DefaultHeader />
      <main className={styles.Home}>
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
      </main>
    </>
  );
}
