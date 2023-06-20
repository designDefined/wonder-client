import styles from "./TextInput.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  classNames?: string;
  isRound?: boolean;
};
export default function TextInput({
  title,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  classNames,
  isRound,
}: Props) {
  return (
    <div className={cx("TextInput", { notRound: !isRound })}>
      {title && <h3 className={cx("title")}>{title}</h3>}
      <input
        className={cx("input")}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  );
}
