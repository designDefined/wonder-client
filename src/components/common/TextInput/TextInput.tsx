import styles from "./TextInput.module.scss";

type Props = {
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  classNames?: string;
};
export default function TextInput({
  title,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  classNames,
}: Props) {
  return (
    <div className={styles.TextInput}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <input
        className={styles.input}
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
