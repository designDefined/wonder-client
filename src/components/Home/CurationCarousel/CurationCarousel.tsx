import styles from "./CurationCarousel.module.scss";
import { navigate } from "../../../libs/Codex";
import { Curation } from "../../../types/wonder/curation";
import {
  WonderCard,
  WonderCardOnlyThumbnail,
} from "../../../types/wonder/wonderCardDisplay";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Lottie from "react-lottie";
import likeAnimation from "../../../../public/assets/animation/like.json";

type CurationCarouselProps = {
  curation: Curation;
};
export default function CurationCarousel({ curation }: CurationCarouselProps) {
  return (
    <div className={styles.CurationCarousel}>
      <div className={styles.title}>
        <SectionTitle
          title={curation.title}
          attribute={{ size: "medium" }}
          onClick={() => navigate(curation.to, "slideNext")}
        />
      </div>
      <ul className={styles.cardList}>
        {curation.type === "wonderThumbnail" &&
          curation.data.map((card) => (
            <li key={card.id} className={styles.thumbnailOnly}>
              {
                <img
                  className={styles.thumbnail}
                  src={card.thumbnail.src}
                  alt={card.thumbnail.altText}
                />
              }
            </li>
          ))}
        {curation.type === "wonder" &&
          curation.data.map((card) => (
            <li key={card.id} className={`${styles.card}`}>
              <div className={styles.thumbnail}>
                <img src={card.thumbnail.src} alt={card.thumbnail.altText} />
                <button className={styles.like}>
                  <img src="/assets/icon/favorite/default.svg" />
                  {/*
                  <Lottie
                    options={{
                      animationData: likeAnimation,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                    width={60}
                  />
                   */}
                </button>
              </div>
              <div className={styles.description}>
                <div className={styles.tags}></div>
                <div className={styles.wonderTitle}>{card.title}</div>
                <div className={styles.schedule}>
                  {card.schedule[0].date.slice(1).join(". ")}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
