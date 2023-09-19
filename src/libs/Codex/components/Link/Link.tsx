import { navigate } from "../..";
import { PropsWithChildren } from "react";
import styles from "./Link.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type LinkProps = {
  to: string;
  className: string;
};

export default function Link({
  to,
  className,
  children,
}: PropsWithChildren<LinkProps>) {
  return (
    <a
      href={to}
      className={cx("Link", className)}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
