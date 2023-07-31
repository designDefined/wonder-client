import styles from "./Home.module.scss";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import PromotionBanner from "../../components/Home/PromotionBanner/PromotionBanner";
import AboutWonder from "../../components/Home/AboutWonder/AboutWonder";
import RecentEvent from "../../components/Home/RecentEvent/RecentEvent";
import creatorGuide from "/assets/illustration/creator_guide.png";
import instagram from "/assets/illustration/instagram.png";
import { useAccount } from "../../store/account/useAccount";
import TextField from "../../components/common/TextField/TextField";
import { Curation } from "../../types/wonder/curation";
import useFetch from "../../libs/ReactAssistant/useFetch";
import api from "../../api";
import { useEffect } from "react";
import CurationCarousel from "../../components/Home/CurationCarousel/CurationCarousel";

export default function Home() {
  const myAccount = useAccount((state) => state.user);

  const [curations] = useFetch<Curation[]>(() => api.get("/wonder/home"), []);

  useEffect(() => {
    console.log(curations);
  }, [curations]);

  return (
    <>
      <DefaultHeader />
      <main className={styles.Home}>
        <PromotionBanner />
        {curations &&
          curations.map((curation) => (
            <CurationCarousel key={curation.title} curation={curation} />
          ))}
        {/*!myAccount && <AboutWonder />*/}
        <div className={styles.banners}>
          <a
            className={styles.miniBanner}
            href="https://www.instagram.com/with_wonder4/"
          >
            <img className={styles.background} src={instagram} />
            원더 인스타그램 <br />
            보러 가기
          </a>
          <a
            className={styles.miniBanner}
            href="https://hhhyejaaa.notion.site/Beta-Test-596d1430dd82418fbf1fdb00f24c6b38?pvs=4"
          >
            <img className={styles.background} src={creatorGuide} />
            원더 창작자 가이드 <br />
            보러 가기
          </a>
        </div>
      </main>
    </>
  );
}
