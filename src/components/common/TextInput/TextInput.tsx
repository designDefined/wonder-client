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
  maxLength?: number;
  isDisabled?: boolean;
};
export default function TextInput({
  title,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  classNames,
  maxLength,
  isRound,
  isDisabled,
}: Props) {
  return (
    <div
      className={cx("TextInput", classNames, {
        notRound: !isRound,
        error: maxLength && value.length >= maxLength,
        disabled: isDisabled,
      })}
    >
      {title && <h3 className={cx("title")}>{title}</h3>}
      <input
        className={cx("input")}
        type="text"
        placeholder={isDisabled ? "작성이 불가합니다." : placeholder}
        value={value}
        onChange={(e) => {
          if (maxLength && e.target.value.length > maxLength) return;
          onChange(e);
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={isDisabled}
      />
      {maxLength && (
        <div className={cx("count")}>
          {maxLength && value.length >= maxLength
            ? `${maxLength}자를 초과했어요`
            : `${value.length} / ${maxLength}`}
        </div>
      )}
    </div>
  );
}
