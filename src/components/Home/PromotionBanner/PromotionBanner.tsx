import styles from "./PromotionBanner.module.scss";

type Props = {
  bannerData: { thumbnail: string; alt: string }[];
};

export default function PromotionBanner({ bannerData }: Props) {
  return (
    <section className={styles.PromotionBanner}>
      <ul className={styles.bannerList}>
        {bannerData.map(({ alt, thumbnail }, index) => (
          <li key={index} className={styles.banner}>
            <img src={thumbnail} alt={alt} />
          </li>
        ))}
      </ul>
      <ul className={styles.navigator}>
        {bannerData.map((value, index) => (
          <li key={index} className={styles.navigatorButton} />
        ))}
      </ul>
    </section>
  );
}
