import classNames from "classnames/bind";
import { useMemo, useState } from "react";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

type TextInputTypes =
  | "text"
  | "password"
  | "number"
  | "email"
  | "tel"
  | "url"
  | "search";

export type TextInputValidator = (value: string) => string | null;

type TextProps = {
  title?: string;
  value: string;
  placeholder?: string;
  type?: TextInputTypes;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onValidateError?: TextInputValidator;
  maxLength?: number;
  isDisabled?: boolean;
  isHintAvailable?: boolean;
  className?: string;
};

function Text({
  title,
  value,
  placeholder,
  type = "text",
  onChange,
  onBlur = () => null,
  onFocus = () => null,
  onValidateError = () => null,
  maxLength,
  isDisabled = false,
  isHintAvailable = false,
  className,
}: TextProps) {
  const [focus, setFocus] = useState(false);
  const { isError, message } = useMemo<{
    isError: boolean;
    message: string | null;
  }>(() => {
    const error = onValidateError(value);
    if (error) return { isError: !focus, message: error };
    if (maxLength)
      return value.length <= maxLength
        ? { isError: false, message: `${value.length} / ${maxLength}` }
        : { isError: true, message: `${maxLength}자를 초과했어요` };
    return { isError: false, message: null };
    console.log(error);
  }, [value, onValidateError, maxLength, focus]);
  return (
    <div
      className={cx("Text", { error: isError, disable: isDisabled }, className)}
    >
      {title && <h3 className={cx("title")}>{title}</h3>}
      <input
        className={cx("input")}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={isDisabled ? "작성이 불가합니다." : placeholder}
        onBlur={(e) => {
          setFocus(false);
          onBlur(e);
        }}
        onFocus={(e) => {
          setFocus(true);
          onFocus(e);
        }}
        disabled={isDisabled}
      />
      {isHintAvailable && <div className={cx("hint")}>{message}</div>}
    </div>
  );
}

const Input = { Text };

export default Input;
