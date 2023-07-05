import styles from "./MyPageSubHeader.module.scss";

type Props = {
  title: string;
};
export default function MyPageSubHeader({ title }: Props) {
  return (
    <div className={styles.MyPageSubHeader}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>
        카드를 누르면 이벤트 상세 페이지로 이동합니다.
      </div>
    </div>
  );
}
