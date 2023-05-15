import styles from "./WithLabel.module.scss";
import TextInput from "../../../../components/inputs/TextInput/TextInput";
import { ChangeEventHandler } from "react";

type TextInputhWithLabelProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeHolder?: string;
};

export default function TextInputWithLabel({
  label,
  value,
  onChange,
  placeHolder,
}: TextInputhWithLabelProps) {
  return (
    <div className={styles.TextInputWithLabel}>
      <div className={styles.label}>{label}</div>
      <TextInput value={value} onChange={onChange} placeHolder={placeHolder} />
    </div>
  );
}
