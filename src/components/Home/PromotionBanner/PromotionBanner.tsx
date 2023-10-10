import styles from "./PromotionBanner.module.scss";

type BannerData = {
  src: string;
  alt: string;
  link: string;
};

const sampleBanners: BannerData[] = [
  { src: "/assets/illustration/banner1.png", alt: "banner 1", link: "/" },
  { src: "/assets/illustration/banner2.png", alt: "banner 2", link: "/" },
];

export default function PromotionBanner() {
  return (
    <section className={styles.PromotionBanner}>
      <ul className={styles.bannerList}>
        {sampleBanners.map(({ src, alt, link }, index) => (
          <li key={index} className={styles.banner}>
            <img src={src} alt={alt} />
          </li>
        ))}
      </ul>
      <ul className={styles.navigator}>
        {sampleBanners.map((value, index) => (
          <li key={index} className={styles.navigatorButton} />
        ))}
      </ul>
    </section>
  );
}
