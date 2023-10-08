import classNames from "classnames/bind";
import { MouseEventHandler, PropsWithChildren } from "react";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

type ButtonProps = PropsWithChildren & {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isFullWidth?: boolean;
  isSmallSized?: boolean;
  isMainColored?: boolean;
};

export function Button({
  children,
  className,
  onClick,
  isSmallSized,
  isFullWidth,
  isMainColored,
}: ButtonProps) {
  return (
    <button
      className={cx(
        "Button",
        { isSmallSized, isFullWidth, isMainColored },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
