import styles from "./RichTextArea.module.scss";

type Props = {
  title?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  classNames?: string;
};

export default function RichTextArea({
  title,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  classNames,
}: Props) {
  return (
    <div className={styles.RichTextArea}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.textAreaWrapper}>
        <div className={styles.controller}></div>
        <textarea
          className={styles.textArea}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
}
