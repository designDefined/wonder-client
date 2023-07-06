import { setScroll } from "../Codex";
import styles from "./BottomTray.module.scss";
import { closeTray, requestTrayResize, useTray } from "./useTray";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

export default function BottomTray() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useTray((state) => state.target);
  const needResize = useTray((state) => state.needResize);

  const [height, setHeight] = useState(0);
  const [dragging, setDragging] = useState<{ now: boolean; amount: number }>({
    now: false,
    amount: height,
  });

  useEffect(() => {
    if (target !== null) {
      if (ref.current) {
        setScroll(false);
        setHeight(ref.current.offsetHeight ?? 0);
        if (needResize) requestTrayResize(false);
      }
    } else {
      setScroll(true);
      setHeight(0);
      setDragging({ now: false, amount: 0 });
    }
  }, [target, needResize]);

  return (
    <div
      className={cx("BottomTray", {
        empty: target === null,
        notDragging: !dragging.now,
      })}
      style={{
        backgroundColor: `rgba(0,0,0, ${
          (dragging.now ? dragging.amount : height) / (height * 1.5)
        })`,
      }}
      onClick={(e) => {
        e.stopPropagation();
        closeTray();
      }}
      onTouchMove={(e) => {
        e.stopPropagation();
        console.log(e);
        if (ref.current?.offsetParent) {
          if (dragging.now) {
            const viewportHeight = window.innerHeight;
            if (
              !(viewportHeight - e.changedTouches[0].clientY > height * 1.2)
            ) {
              setDragging({
                now: true,
                amount: viewportHeight - e.changedTouches[0].clientY,
              });
            }
          }
        }
      }}
      onTouchEnd={() => {
        {
          if (dragging.now) {
            if (dragging.amount < height / 2) {
              closeTray();
            } else {
              setDragging({
                now: false,
                amount: height,
              });
            }
          }
        }
      }}
    >
      <div
        className={cx("wrapper")}
        ref={ref}
        style={{
          transform: `translateY(-${
            dragging.now ? dragging.amount : height
          }px)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={cx("handle")}
          onTouchStart={() => {
            console.log("start!");
            setDragging({
              now: true,
              amount: height,
            });
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={cx("bar")} />
        </div>
        {target && target()}
        <div className={cx("hider")} />
      </div>
    </div>
  );
}
