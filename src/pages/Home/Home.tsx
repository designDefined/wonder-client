import styles from "./Home.module.scss";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import Carousel from "../../components/Carousel/Carousel";
import Title from "../../components/Title/Title";
import classNames from "classnames/bind";
import Link from "../../libs/Codex/components/Link/Link";

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
          <Title.More title="새로 올라왔어요" onClick="/dev" />
        </Carousel.ThumbnailOnly>
        <Carousel.HomeVertical className={cx("curation")} queryName="default">
          <Title.More title="기획 2" onClick="/dev" />
        </Carousel.HomeVertical>
        <Link className={cx("banner")} to="/dev">
          <img src="/assets/illustration/banner1.png" />
        </Link>
        <Carousel.HomeVertical className={cx("curation")} queryName="default">
          <Title.More title="기획 3" onClick="/dev" />
        </Carousel.HomeVertical>
        <Link className={cx("banner")} to="/dev">
          <img src="/assets/illustration/banner2.png" />
        </Link>
      </main>
    </>
  );
}
