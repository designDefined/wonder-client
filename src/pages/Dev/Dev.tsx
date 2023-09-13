import classNames from "classnames/bind";
import { Button } from "../../components/Button/Button";
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
    </main>
  );
}
