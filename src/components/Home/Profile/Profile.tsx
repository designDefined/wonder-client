import styles from "./Profile.module.scss";
import { useOverlay } from "../../../store/overlay/useOverlay";
import { User } from "../../../entity/user/user";
import { navigate } from "../../../libs/Codex";
import { UserSummary } from "../../../types/user/userSummary";
import { useFetches } from "../../../libs/Admon";
import api from "../../../api";
import { CreatorDisplay } from "../../../types/creator/creatorDisplay";
import {
  deleteAutoLogin,
  getUserToken,
  saveAutoLogin,
  tryAutoLogin,
} from "../../../libs/AutoLogin/autoLogin";
import { useEffect } from "react";

type Props = {
  myAccount: UserSummary;
};

function DropdownOverlay({ myAccount }: Props) {
  const myCreators = useFetches<CreatorDisplay>(
    //    api.get(`/user/ownedCreator?userId=${myAccount.id}`),
    api.get(`/user/ownedCreator`, { Authorization: getUserToken() ?? "-1" }),
  );

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
      <div className={styles.tab} onClick={() => navigate("/me", "slideNext")}>
        내 프로필
      </div>
      <div className={styles.tab}>알림</div>
      <div className={styles.divider} />
      <div className={styles.tab}>크리에이터 페이지</div>
      {myCreators.map(
        ({ id, name, profileImage }) => (
          <div
            className={styles.creator}
            key={id}
            onClick={() => {
              saveAutoLogin("creator", id);
              navigate(`/creator/${id}`, "slideNext");
            }}
          >
            <span>{name}</span>
            <img src={profileImage.src} alt={profileImage.altText} />
          </div>
        ),
        <div />,
      )}
      <div className={styles.tab} onClick={() => navigate("/new/creator")}>
        새 크리에이터 생성
      </div>
      <div className={styles.divider} />
      <div className={styles.tab}>설정</div>
      <div className={styles.tab}>업데이트 노트</div>
      <div
        className={styles.tab}
        onClick={() => {
          deleteAutoLogin();
          useOverlay.getState().actions.clear();
        }}
      >
        로그아웃
      </div>
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
      <img className={styles.thumb} src={myAccount.profileImage.src} />
    </div>
  );
}
