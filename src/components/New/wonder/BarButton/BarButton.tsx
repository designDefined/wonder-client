import styles from "./BarButton.module.scss";
import classNames from "classnames/bind";
import ToggleButton from "../../../common/Toggle/ToggleButton";
import arrowIcon from "/assets/icon/arrow_forward_ios.svg";

type Props = {
  title: string;
  interaction:
    | {
        type: "toggle";
        onToggle: (value: boolean) => void;
        value: boolean;
      }
    | {
        type: "click";
        onClick: () => void;
        valueLabel?: string;
      };
  subText?: string;
  isBold: boolean;
};

const cx = classNames.bind(styles);

export default function BarButton({
  title,
  interaction,
  isBold,
  subText,
}: Props) {
  return (
    <div
      className={cx("BarButton")}
      onClick={() => {
        if (interaction.type === "click") interaction.onClick();
      }}
    >
      <div className={cx("title", { bold: isBold })}>{title}</div>
      <div className={styles.buttonArea}>
        <div className={styles.subText}>{subText && subText}</div>
        {interaction.type === "click" && (
          <button className={styles.button}>
            <div className={styles.valueLabel}>
              {interaction.valueLabel ?? ""}
            </div>
            <img src={arrowIcon} />
          </button>
        )}
        {interaction.type === "toggle" && (
          <ToggleButton
            onToggle={interaction.onToggle}
            value={interaction.value}
          />
        )}
      </div>
    </div>
  );
}
