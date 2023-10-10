import styles from "./LabeledTextForm.module.scss";
import classNames from "classnames/bind";
import TextInput from "../../../common/TextInput/TextInput";

const cx = classNames.bind(styles);

type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  isMandatory: boolean;
};

export default function LabeledTextForm({
  label,
  value,
  onChange,
  placeHolder,
  isMandatory,
}: Props) {
  return (
    <div className={cx("LabeledTextForm")}>
      <div className={cx("label", { mandatory: isMandatory })}>{label}</div>
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        isRound={false}
      />
    </div>
  );
}
