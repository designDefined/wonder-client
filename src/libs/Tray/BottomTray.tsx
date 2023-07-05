import styles from "./BottomTray.module.scss";
import { useTray } from "./useTray";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

export default function BottomTray() {
  const target = useTray((state) => state.target);
  const needResize = useTray((state) => state.needResize);
  const requestTrayResize = useTray((state) => state.requestTrayResize);
  const closeTray = useTray((state) => state.closeTray);
  const [height, setHeight] = useState(0);
  const [dragging, setDragging] = useState<{ now: boolean; amount: number }>({
    now: false,
    amount: height,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
      if (needResize) {
        requestTrayResize(false);
      }
    }
  }, [ref.current?.clientHeight, needResize, target]);

  useEffect(() => {
    if (!target) {
      console.log(dragging.now);
      setHeight(0);
      setDragging({ now: false, amount: 0 });
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [target]);

  useEffect(() => {
    const touchmove = (e: TouchEvent) => {
      e.stopPropagation();
      if (ref.current?.offsetParent) {
        if (dragging.now) {
          const viewportHeight = window.innerHeight;
          if (!(viewportHeight - e.changedTouches[0].clientY > height)) {
            console.log(viewportHeight - e.changedTouches[0].clientY > height);
            setDragging({
              now: true,
              amount: viewportHeight - e.changedTouches[0].clientY,
            });
          }
        }
      }
    };
    const touchend = () => {
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
    };

    window.addEventListener("touchmove", touchmove);
    window.addEventListener("touchend", touchend);
    return () => {
      removeEventListener("touchmove", touchmove);
      removeEventListener("touchend", touchend);
    };
  }, []);

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
      onClick={() => {
        closeTray();
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
      </div>
    </div>
  );
}
