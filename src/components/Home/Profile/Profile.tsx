import styles from "./Profile.module.scss";
import { useOverlay } from "../../../store/overlay/useOverlay";
import { User } from "../../../entity/user/user";
import { navigate } from "../../../libs/Codex";

type Props = {
  myAccount: User;
};

function DropdownOverlay({ myAccount }: Props) {
  return (
    <div
      className={styles.DropdownOverlay}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={styles.profile}>
        <img className={styles.thumb} src={myAccount.profileImage.src} />
        <div className={styles.name}>{myAccount.name}</div>
      </div>
      <div className={styles.divider} />
      <div className={styles.tab}>내 프로필</div>
      <div className={styles.tab}>알림</div>
      <div className={styles.divider} />
      <div
        className={styles.tab}
        onClick={() => {
          navigate("/new");
        }}
      >
        크리에이터 페이지
      </div>
      <div className={styles.divider} />
      <div className={styles.tab}>설정</div>
      <div className={styles.tab}>업데이트 노트</div>
      <div className={styles.tab}>로그아웃</div>
    </div>
  );
}

export default function Profile({ myAccount }: Props) {
  const { addOverlay } = useOverlay((state) => state.actions);
  return (
    <div
      className={styles.Profile}
      onClick={() =>
        addOverlay({
          target: <DropdownOverlay myAccount={myAccount} />,
          config: { closeWhenBlurred: true },
        })
      }
    >
      <img className={styles.thumb} />
    </div>
  );
}
