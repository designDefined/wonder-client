import styles from "./Home.module.scss";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import Carousel from "../../components/Carousel/Carousel";
import Title from "../../components/Title/Title";
import classNames from "classnames/bind";
import Link from "../../libs/Codex/components/Link/Link";
import { stringify } from "qs";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <DefaultHeader />
      <main className={cx("Home")}>
        <Carousel.ThumbnailZoomed
          className={cx("curation")}
          queryName="default"
        />
        <Carousel.ThumbnailOnly className={cx("curation")} queryName="default">
          <Title.More title="새로 올라왔어요" onClick="/search?all=true" />
        </Carousel.ThumbnailOnly>
        <Carousel.HomeVertical
          className={cx("curation")}
          filter={{ genre: { $in: ["exhibition"] } }}
          queryName="exhibition"
        >
          <Title.More
            title="Editor의 픽"
            onClick={`/search?${stringify({
              filter: { genre: "exhibition" },
            })}`}
          />
        </Carousel.HomeVertical>
        <Link className={cx("banner")} to="/">
          <img src="/assets/illustration/banner1.png" />
        </Link>
        <Carousel.HomeVertical className={cx("curation")} queryName="default">
          <Title.More title="인기 이벤트" onClick="/search?all=true" />
        </Carousel.HomeVertical>
        <Link className={cx("banner")} to="/dev">
          <img src="/assets/illustration/banner2.png" />
        </Link>
      </main>
    </>
  );
}
