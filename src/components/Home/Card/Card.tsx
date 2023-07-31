import styles from "./Card.module.scss";
import { WonderCard } from "../../../types/wonder/wonderCardDisplay";
import classNames from "classnames/bind";

type CardBigProps = WonderCard;
type CardSmallProps = Pick<WonderCard, "id" | "thumbnail">;

const cx = classNames.bind(styles);

export function CardBig({ id, title, thumbnail, tags }: CardBigProps) {
  return (
    <div>
      <div>
        <span>{"진행 중"}</span>
        <span>{tags[0].value}</span>
      </div>
      <div>{title}</div>
    </div>
  );
}
export function CardSmall({}: CardSmallProps) {
  return <div></div>;
}
