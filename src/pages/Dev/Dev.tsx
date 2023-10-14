import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { getWonderDetail } from "../../api/wonder";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Chip from "../../components/Chip/Chip";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import styles from "./Dev.module.scss";

const cx = classNames.bind(styles);

export default function Dev() {
  const [text, setText] = useState("");
  // const { isLoading, data, error } = useQuery(
  //   getWonderList({ id: { $in: [1, 2] } }),
  // );
  const { isLoading, data, error } = useQuery(getWonderDetail(0));
  useEffect(() => {
    if (!isLoading) {
      data && console.log(data);
      error && console.log(error);
    }
  }, [data, error]);
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
        <div className={cx("horizontal")}>
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
              schedule: [new Date()],
            }}
          />
          <Card.Vertical
            wonder={{
              id: 1,
              title: "샘플 2번 카드",
              tag: { status: "reserveNow", genre: "play" },
              thumbnail: {
                src: "https://wonder-image-test.s3.ap-northeast-2.amazonaws.com/1_ohyuk.png",
                altText: "",
              },
              liked: false,
              schedule: [new Date()],
            }}
          />
        </div>
        <div className={cx("horizontal")}>
          <Card.Vertical
            wonder={{
              id: 1,
              title: "모르겠습니다...",
              tag: { status: "reserveSoon", genre: "play" },
              thumbnail: {
                src: "https://wonder-image-test.s3.ap-northeast-2.amazonaws.com/wonder_poster_sample.png",
                altText: "",
              },
              liked: true,
              schedule: [new Date()],
            }}
          />
          <Card.Vertical
            wonder={{
              id: 1,
              title: "샘플 2번 카드",
              tag: { status: "reserveNow", genre: "play" },
              thumbnail: {
                src: "https://wonder-image-test.s3.ap-northeast-2.amazonaws.com/1_ohyuk.png",
                altText: "",
              },
              liked: true,
              schedule: [new Date()],
            }}
          />
        </div>
        <Card.ThumbnailOnly
          wonder={{
            id: 2,
            thumbnail: {
              src: "https://wonder-image-test.s3.ap-northeast-2.amazonaws.com/1_ohyuk.png",
              altText: "",
            },
          }}
        />
      </section>
      <section className={cx("section")}>
        <Title title="Inputs" />
        <Input.Text
          title="텍스트 입력"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="15자 이내로 작성해주세요."
          maxLength={15}
          onValidateError={(value) =>
            value.startsWith(" ") ? "공백으로 시작할 수 없습니다." : null
          }
          isHintAvailable
        />
      </section>
    </main>
  );
}
