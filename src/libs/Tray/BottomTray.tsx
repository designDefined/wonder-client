import styles from "./BottomTray.module.scss";
import { useTray } from "./useTray";
import classNames from "classnames/bind";
import { useEffect, useReducer, useRef, useState } from "react";

const cx = classNames.bind(styles);

export default function BottomTray() {
  const target = useTray((state) => state.target);
  const needResize = useTray((state) => state.needResize);
  const requestTrayResize = useTray((state) => state.requestTrayResize);
  const closeTray = useTray((state) => state.closeTray);
  const [height, setHeight] = useState(0);
  const [dragging, setDragging] = useState({
    now: false,
    minimal: false,
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
      setHeight(0);
      setDragging({
        now: false,
        minimal: false,
        amount: 0,
      });
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [target]);

  return (
    <div
      className={cx("BottomTray", {
        empty: target === null,
        notDragging: !dragging.now,
      })}
      style={{
        backgroundColor: `rgba(0,0,0, ${
          (dragging.now ? dragging.amount : dragging.minimal ? 40 : height) /
          (height * 1.5)
        })`,
      }}
      onTouchMove={(e) => {
        e.stopPropagation();
        if (ref.current?.offsetParent) {
          if (dragging.now) {
            const viewportHeight = ref.current.offsetParent.clientHeight;
            console.log(e.changedTouches[0].pageY);
            setDragging({
              ...dragging,
              amount: viewportHeight - e.changedTouches[0].clientY,
            });
          }
        }
      }}
      onTouchEnd={() => {
        if (dragging.now) {
          if (dragging.amount < height / 5) {
            closeTray();
          } else {
            setDragging({
              now: false,
              minimal: dragging.amount < height / 2,
              amount: height,
            });
          }
        }
      }}
      onClick={() => {
        if (dragging.minimal) {
          setDragging({
            now: false,
            minimal: false,
            amount: height,
          });
        } else {
          closeTray();
        }
      }}
    >
      <div
        className={cx("wrapper")}
        ref={ref}
        style={{
          transform: `translateY(-${
            dragging.now ? dragging.amount : dragging.minimal ? "40" : height
          }px)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={cx("handle")}
          onTouchStart={() => {
            setDragging({
              now: true,
              minimal: false,
              amount: dragging.minimal ? 40 : height,
            });
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={cx("bar")} />
        </div>
        {target}
      </div>
    </div>
  );
}
