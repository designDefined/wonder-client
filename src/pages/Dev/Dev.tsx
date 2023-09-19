import classNames from "classnames/bind";
import { Button } from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Chip from "../../components/Chip/Chip";
import Title from "../../components/Title/Title";
import styles from "./Dev.module.scss";

const cx = classNames.bind(styles);

export default function Dev() {
  return (
    <main className={cx("Dev")}>
      <section className={cx("section")}>
        <Title title="Buttons" />
        <Button isFullWidth isMainColored>
          Big
        </Button>
        <Button isFullWidth>Big</Button>
        <Button isMainColored>Normal</Button>
        <Button>Normal</Button>
        <div className={cx("horizontal")}>
          <Button isSmallSized isMainColored>
            Small
          </Button>
          <Button isSmallSized>Small</Button>
        </div>
      </section>
      <section className={cx("section")}>
        <Title title="Titles" />
        <Title title="Normal Title" />
        <Title.More title="More Title" onClick="/dev" />
        <Title.More title="Arrow Title" onClick="/dev" />
      </section>
      <section className={cx("section")}>
        <Title title="Chips" />
        <div className={cx("horizontal")}>
          <Chip.Genre genre="play" />
          <Chip.Genre genre="play" />
          <Chip.Genre genre="play" />
        </div>
        <div className={cx("horizontal")}>
          <Chip.Status status="reserveSoon" />
          <Chip.Status status="reserveNow" />
          <Chip.Status status="reserveFinished" />
          <Chip.Status status="soon" />
          <Chip.Status status="now" />
          <Chip.Status status="finished" />
        </div>
      </section>
      <section className={cx("section")}>
        <Title title="Cards" />
        <Card.Vertical
          wonder={{
            id: 1,
            title: "모르겠습니다...",
            tag: { status: "reserveSoon", genre: "play" },
            thumbnail: {
              src: "https://wonder-image-test.s3.ap-northeast-2.amazonaws.com/wonder_poster_sample.png",
              altText: "",
            },
            liked: false,
            schedule: [new Date().toString()],
          }}
        />
        <Card.ThumbnailOnly
          wonder={{
            id: 2,
            thumbnail: {
              src: "https://wonder-image-test.s3.ap-northeast-2.amazonaws.com/wonder_poster_sample.png",
              altText: "",
            },
          }}
        />
      </section>
    </main>
  );
}
