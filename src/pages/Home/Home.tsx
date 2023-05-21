import styles from "./Home.module.scss";
import { useMyAccountStore } from "../../store/account/useMyAccountStore";
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader";
import PromotionBanner from "../../components/Home/PromotionBanner/PromotionBanner";
import AboutWonder from "../../components/Home/AboutWonder/AboutWonder";
import RecentEvent from "../../components/Home/RecentEvent/RecentEvent";
import sampleBanner from "../../assets/sample/promotion_banner_sample.png";
import sampleThumbnail from "../../assets/sample/poster_sample.png";
import { homeBanner } from "../../entity/etc/homeBanner";
import { WonderCard } from "../../entity/wonder/card";
import creatorGuide from "../../assets/illustration/creator_guide.png";
import instagram from "../../assets/illustration/instagram.png";
import { useEffect } from "react";

const sampleBanners: homeBanner[] = [
  { id: 0, alt: "alt", thumbnail: sampleBanner },
  { id: 1, alt: "alt", thumbnail: sampleBanner },
  { id: 2, alt: "alt", thumbnail: sampleBanner },
  { id: 3, alt: "alt", thumbnail: sampleBanner },
  { id: 4, alt: "alt", thumbnail: sampleBanner },
];

const sampleCards: WonderCard[] = [
  {
    id: 0,
    creator: "정보문화학",
    title: "new_ISC = ITCT(“20th”)",
    thumbnail: sampleThumbnail,
  },
  {
    id: 1,
    creator: "정보문화학",
    title: "new_ISC = ITCT(“20th”)",
    thumbnail: sampleThumbnail,
  },
  {
    id: 2,
    creator: "정보문화학",
    title: "new_ISC = ITCT(“20th”)",
    thumbnail: sampleThumbnail,
  },
  {
    id: 3,
    creator: "정보문화학",
    title: "new_ISC = ITCT(“20th”)",
    thumbnail: sampleThumbnail,
  },
];

const test = async () => {
  const res = await fetch("/ping");
  const json = await res.json();
  console.log(json);
};

export default function Home() {
  const isLoggedIn = useMyAccountStore((state) => state.isLoaded);

  useEffect(() => {
    test().then(() => {});
  }, []);

  return (
    <main className={styles.Home}>
      <HomeHeader />
      <PromotionBanner bannerData={sampleBanners} />
      {!isLoggedIn && <AboutWonder />}
      <RecentEvent eventData={sampleCards} />
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
  );
}
