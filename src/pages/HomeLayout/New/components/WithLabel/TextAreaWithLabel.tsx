import styles from "./WithLabel.module.scss";

type TextAreaWithLabelProps = {
  label: string;
};

export default function TextAreaWithLabel({ label }: TextAreaWithLabelProps) {
  return (
    <div className={styles.TextAreaWithLabel}>
      <div className={styles.label}>{label}</div>
      <textarea />
    </div>
  );
}
