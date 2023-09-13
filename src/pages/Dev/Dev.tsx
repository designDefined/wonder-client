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
          주 버튼
        </Button>
        <Button isFullWidth>부 버튼</Button>
        <Button isMainColored>주 버튼</Button>
        <Button>부 버튼</Button>
        <Button isSmallSized isMainColored>
          주 버튼
        </Button>
        <Button isSmallSized>부 버튼</Button>
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
