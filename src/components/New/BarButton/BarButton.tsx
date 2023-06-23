import styles from "./BarButton.module.scss";
import classNames from "classnames/bind";
import ToggleButton from "../../common/Toggle/ToggleButton";
import arrowIcon from "/src/assets/icon/arrow_forward_ios.svg";

type Props = {
  title: string;
  interaction:
    | {
        type: "toggle";
        onToggle: (value: boolean) => void;
        defaultValue?: boolean;
      }
    | {
        type: "click";
        onClick: () => void;
        valueLabel?: string;
      };
  isBold: boolean;
};

const cx = classNames.bind(styles);

export default function BarButton({ title, interaction, isBold }: Props) {
  return (
    <div className={cx("BarButton")}>
      <div className={cx("title", { bold: isBold })}>{title}</div>
      {interaction.type === "click" && (
        <button className={styles.button} onClick={interaction.onClick}>
          <div className={styles.valueLabel}>
            {interaction.valueLabel ?? ""}
          </div>
          <img src={arrowIcon} />
        </button>
      )}
      {interaction.type === "toggle" && (
        <ToggleButton
          onToggle={interaction.onToggle}
          defaultValue={interaction.defaultValue ?? false}
        />
      )}
    </div>
  );
}