import styles from "./PromotionBanner.module.scss";
import sampleBanner from "../../../assets/sample/promotion_banner_sample.png";

export default function PromotionBanner() {
  return (
    <section className={styles.PromotionBanner}>
      <ul className={styles.bannerList}>
        <li className={styles.banner}>
          <img src={sampleBanner} alt="sample banner" />
        </li>
        <li className={styles.banner}>
          <img src={sampleBanner} alt="sample banner" />
        </li>
        <li className={styles.banner}>
          <img src={sampleBanner} alt="sample banner" />
        </li>
        <li className={styles.banner}>
          <img src={sampleBanner} alt="sample banner" />
        </li>
        <li className={styles.banner}>
          <img src={sampleBanner} alt="sample banner" />
        </li>
      </ul>
      <ul className={styles.navigator}>
        <li className={styles.navigatorButton} />
        <li className={styles.navigatorButton} />
        <li className={styles.navigatorButton} />
        <li className={styles.navigatorButton} />
        <li className={styles.navigatorButton} />
      </ul>
    </section>
  );
}
