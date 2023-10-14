import classNames from "classnames/bind";
import { useState } from "react";
import { UserMyInfo } from "../../entity/user/myInfo";
import { navigate } from "../../libs/Codex";
import { useOverlay } from "../../store/overlay/useOverlay";
import styles from "./Profile.module.scss";

const cx = classNames.bind(styles);

type DropdownProps = {
  myInfo: UserMyInfo;
};

function DropdownOverlay({
  myInfo: { name, profileImage, ownedCreators },
}: DropdownProps) {
  return (
    <div
      className={cx("DropdownOverlay")}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className={cx("profile")}
        onClick={() => navigate("/me", "slideNext")}
      >
        <img
          className={cx("thumb")}
          src={profileImage.src}
          alt={profileImage.altText}
        />
        <div className={cx("name")}>{name}</div>
      </div>
      <div className={cx("divider")} />
      <div className={cx("tab")} onClick={() => navigate("/me", "slideNext")}>
        내 프로필
      </div>
      <div className={cx("tab")}>알림</div>
      <div className={cx("divider")} />
      <div className={cx("tab")}>크리에이터 페이지</div>
      {ownedCreators.map(({ id, name, profileImage }) => (
        <div
          className={cx("creator")}
          key={id}
          onClick={() => {
            navigate(`/creator/${id}`, "slideNext");
          }}
        >
          <span>{name}</span>
          <img src={profileImage.src} alt={profileImage.altText} />
        </div>
      ))}
      <div className={cx("divider")} />
      <div className={cx("tab")}>설정</div>
      <div className={cx("tab")}>업데이트 노트</div>
      <div
        className={cx("tab")}
        onClick={() => {
          useOverlay.getState().actions.clear();
        }}
      >
        로그아웃
      </div>
    </div>
  );
}

type MeProps = {
  myInfo: UserMyInfo;
};

function Me({ myInfo }: MeProps) {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={styles.Profile} onClick={() => setMenuOpened(!menuOpened)}>
      {menuOpened && <DropdownOverlay myInfo={myInfo} />}
      <img
        className={cx("thumb")}
        src={myInfo.profileImage.src}
        alt={myInfo.profileImage.altText}
      />
    </div>
  );
}

const Profile = {
  Me,
};

export default Profile;
