import classNames from "classnames/bind";
import { Button } from "../../components/Button/Button";
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
          <Chip.Genre genre="연극" />
          <Chip.Genre genre="뮤지컬" />
          <Chip.Genre genre="일일호프" />
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
    </main>
  );
}
