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
  isDisabled?: boolean;
};

function Button({
  children,
  className,
  onClick,
  isSmallSized,
  isFullWidth,
  isMainColored,
  isDisabled,
}: ButtonProps) {
  return (
    <button
      className={cx(
        "Button",
        { isSmallSized, isFullWidth, isMainColored, isDisabled },
        className,
      )}
      onClick={isDisabled ? () => null : onClick}
    >
      {children}
    </button>
  );
}

type SubmitProps = Omit<ButtonProps, "onClick" | "children"> & { name: string };

function Submit({
  name,
  className,
  isSmallSized,
  isFullWidth,
  isMainColored,
}: SubmitProps) {
  return (
    <input
      type="submit"
      className={cx(
        "Button",
        { isSmallSized, isFullWidth, isMainColored },
        className,
      )}
      value={name}
    />
  );
}

Button.Submit = Submit;

export default Button;
