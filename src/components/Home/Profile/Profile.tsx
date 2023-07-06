import styles from "./Profile.module.scss";
import { useOverlay } from "../../../store/overlay/useOverlay";
import { navigate } from "../../../libs/Codex";
import { authedApi } from "../../../api";
import { OwnedCreator } from "../../../types/creator/creatorDisplay";
import {
  deleteAutoLogin,
  saveCreatorToken,
} from "../../../libs/AutoLogin/autoLogin";
import { useState } from "react";
import { UserLoggedIn } from "../../../types/user/userAuthorization";
import useFetch from "../../../libs/ReactAssistant/useFetch";
import { useAccount } from "../../../store/account/useAccount";

type Props = {
  myAccount: UserLoggedIn;
};

function DropdownOverlay({ myAccount }: Props) {
  /* 
  const myCreators = useFetches<CreatorDisplay>(
    api.get(`/user/ownedCreator`, { Authorization: getUserToken() ?? "-1" }),
  ); */
  const [ownedCreators] = useFetch<OwnedCreator[]>(
    () => authedApi.get("/user/ownedCreator"),
    [],
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
      {ownedCreators
        ? ownedCreators.map(({ id, name, profileImage }) => (
            <div
              className={styles.creator}
              key={id}
              onClick={() => {
                saveCreatorToken(id);
                navigate(`/creator/${id}`, "slideNext");
              }}
            >
              <span>{name}</span>
              <img src={profileImage.src} alt={profileImage.altText} />
            </div>
          ))
        : [...(Array(myAccount.howManyCreatorsOwned) as unknown[])].map(
            (_, i) => <div key={i} className={styles.emptyCreator} />,
          )}
      <div className={styles.divider} />
      <div className={styles.tab}>설정</div>
      <div className={styles.tab}>업데이트 노트</div>
      <div
        className={styles.tab}
        onClick={() => {
          useAccount.getState().actions.logoutUser();
          useOverlay.getState().actions.clear();
        }}
      >
        로그아웃
      </div>
    </div>
  );
}

export default function Profile({ myAccount }: Props) {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={styles.Profile} onClick={() => setMenuOpened(!menuOpened)}>
      {menuOpened && <DropdownOverlay myAccount={myAccount} />}
      <img className={styles.thumb} src={myAccount.profileImage.src} />
    </div>
  );
}
