import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import { range } from "ramda";
import { PropsWithChildren } from "react";
import { getWonderList } from "../../api/wonder";
import { Wonder } from "../../entity/wonder/wonder";
import Card from "../Card/Card";
import styles from "./Carousel.module.scss";

const cx = classNames.bind(styles);

type BasicProps = PropsWithChildren & {
  className?: string;
  filter?: Record<keyof Wonder, unknown>;
  queryName: string;
  amountOfPlaceholder?: number;
};

function HomeVertical({
  filter,
  queryName,
  amountOfPlaceholder = 5,
  children,
  className,
}: BasicProps) {
  const { isLoading, data, error } = useQuery(getWonderList(filter, queryName));

  return (
    <div className={cx("carousel", "HomeVertical", className)}>
      <div className={cx("titleArea")}>{children}</div>
      {error ? (
        <div>에러 발생</div>
      ) : (
        <div className={cx("slider")}>
          {isLoading &&
            range(0, amountOfPlaceholder).map((key) => (
              <div key={key} className={cx("placeholder")} />
            ))}
          {data &&
            data.map((wonder, index) => (
              <Card.Vertical
                className={cx("sliderItem")}
                key={index}
                wonder={wonder}
              />
            ))}
        </div>
      )}
    </div>
  );
}

function ThumbnailOnly({
  filter,
  queryName,
  amountOfPlaceholder = 5,
  children,
  className,
}: BasicProps) {
  const { isLoading, data, error } = useQuery(getWonderList(filter, queryName));

  return (
    <div className={cx("carousel", "ThumbnailOnly", className)}>
      <div className={cx("titleArea")}>{children}</div>
      {error ? (
        <div>에러 발생</div>
      ) : (
        <div className={cx("slider")}>
          {isLoading &&
            range(0, amountOfPlaceholder).map((key) => (
              <div key={key} className={cx("placeholder")} />
            ))}
          {data &&
            data.map((wonder, index) => (
              <Card.ThumbnailOnly
                className={cx("sliderItem")}
                key={index}
                wonder={{ id: wonder.id, thumbnail: wonder.thumbnail }}
              />
            ))}
        </div>
      )}
    </div>
  );
}

function ThumbnailZoomed({
  filter,
  queryName,
  amountOfPlaceholder = 5,
  className,
}: BasicProps) {
  const { isLoading, data, error } = useQuery(getWonderList(filter, queryName));

  return (
    <div className={cx("carousel", "ThumbnailZoomed", className)}>
      {error ? (
        <div>에러 발생</div>
      ) : (
        <div className={cx("slider")}>
          {isLoading &&
            range(0, amountOfPlaceholder).map((key) => (
              <div key={key} className={cx("placeholder")} />
            ))}
          {data &&
            data.map((wonder, index) => (
              <Card.ThumbnailOnly
                className={cx("sliderItem")}
                key={index}
                wonder={{ id: wonder.id, thumbnail: wonder.thumbnail }}
              />
            ))}
        </div>
      )}
      <div className={cx("navigator")}>
        <div className={cx("dot")} />
        <div className={cx("dot")} />
        <div className={cx("dot")} />
        <div className={cx("dot")} />
        <div className={cx("dot")} />
      </div>
    </div>
  );
}

type LikedVerticalProps = PropsWithChildren & {
  wonders: Wonder[];
  className?: string;
};

function LikedVertical({ wonders, children, className }: LikedVerticalProps) {
  return (
    <div className={cx("carousel", "LikedVertical", className)}>
      <div className={cx("titleArea")}>{children}</div>
      <div className={cx("slider")}>
        {wonders.map((wonder) => (
          <Card.Vertical
            className={cx("sliderItem")}
            key={wonder.id}
            wonder={wonder}
          />
        ))}
      </div>
    </div>
  );
}

const Carousel = {
  HomeVertical,
  LikedVertical,
  ThumbnailOnly,
  ThumbnailZoomed,
};

export default Carousel;
