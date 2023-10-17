import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import { range } from "ramda";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { getWonderList } from "../../api/wonder";
import { Wonder } from "../../entity/wonder";
import Card, { ThumbnailOnlyProps } from "../Card/Card";
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

function ZoomedCardWrapper({
  wonder,
  index,
  scrollLeft,
  isCurrent,
  setCurrent,
}: ThumbnailOnlyProps & {
  index: number;
  scrollLeft: number;
  isCurrent: boolean;
  setCurrent: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      const left = ref.current.offsetLeft;
      const half = (window.innerWidth - width) / 2;
      const progress = (192 - Math.abs(scrollLeft - (left - half))) / 192;

      if (progress === 1) {
        setCurrent();
      }
    }
  }, [ref, scrollLeft]);

  return (
    <div
      key={index}
      id={`item-${index}`}
      className={cx("sliderItem")}
      ref={ref}
    >
      <Card.ThumbnailOnly
        wonder={{ id: wonder.id, thumbnail: wonder.thumbnail }}
        className={cx("zoomable", { current: isCurrent })}
      />
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
  const [scrollLeft, setScrollLeft] = useState(0);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cx("carousel", "ThumbnailZoomed", className)}>
      {error ? (
        <div>에러 발생</div>
      ) : (
        <div
          className={cx("slider")}
          ref={containerRef}
          onScroll={() => {
            if (containerRef.current) {
              setScrollLeft(containerRef.current.scrollLeft);
            }
          }}
        >
          {isLoading &&
            range(0, amountOfPlaceholder).map((key) => (
              <div key={key} className={cx("placeholder")} />
            ))}
          {data &&
            data.map((wonder, index) => (
              <ZoomedCardWrapper
                key={wonder.id}
                wonder={wonder}
                index={index}
                scrollLeft={scrollLeft}
                isCurrent={current === index}
                setCurrent={() => {
                  setCurrent(index);
                }}
              />
            ))}
        </div>
      )}
      <div className={cx("navigator")}>
        {range(0, data?.length || 0).map((key) => (
          <div
            key={key}
            className={cx("dot", { currentDot: key === current })}
            onClick={() => {
              if (containerRef.current) {
                containerRef.current.scrollLeft =
                  containerRef.current.offsetWidth * key;
              }
            }}
          />
        ))}
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
