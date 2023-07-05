import styles from "./ProfileSection.module.scss";
import { authedApi } from "../../../api";
import useFetch from "../../../libs/ReactAssistant/useFetch";
import { UserWithEmail } from "../../../types/user/userDetail";

export default function ProfileSection() {
  const [myDetail] = useFetch<UserWithEmail>(
    () => authedApi.get("/user/myDetail"),
    [],
  );

  if (!myDetail) {
    return <div />;
  }
  return (
    <div className={styles.ProfileSection}>
      <div className={styles.background} />
      <img
        className={styles.profileImage}
        src={myDetail.profileImage.src}
        alt={myDetail.profileImage.altText}
      />
      <div className={styles.nickname}>{myDetail.nickname}</div>
      <div className={styles.email}>{myDetail.email}</div>
      <div className={styles.modify}>프로필 수정하기</div>
    </div>
  );
}
