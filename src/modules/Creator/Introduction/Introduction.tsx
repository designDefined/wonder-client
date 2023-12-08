import styles from "./Introduction.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import { CreatorDisplay } from "../../../entity/creator/display";
import { navigate } from "../../../libs/Codex";

const cx = classNames.bind(styles);

type IntroductionProps = Pick<
  CreatorDisplay,
  "id" | "name" | "summary" | "profileImage"
> & {
  isMine: boolean;
};

export default function Introduction({
  id,
  name,
  summary,
  profileImage,
  isMine,
}: IntroductionProps) {
  return (
    <div className={cx("Introduction")}>
      <div className={cx("profile")}>
        <div className={cx("imageAndName")}>
          <img
            className={cx("profileImage")}
            src={profileImage.src}
            alt={profileImage.altText}
          />
          <div className={cx("names")}>
            <div className={cx("name")}>{name}</div>
            <div className={cx("summary")}>{summary}</div>
          </div>
        </div>
        {isMine && (
          <button
            className={cx("modify")}
            onClick={() => {
              navigate(`/creator/modify/${id}`, "slideNext");
            }}
          >
            프로필 수정하기
          </button>
        )}
      </div>
      <div className={cx("buttons")}>
        {/* <Button className={cx("button")} isMainColored isFullWidth>
          이어서 작성하기
        </Button> */}
        <Button
          className={cx("button")}
          isFullWidth
          onClick={() => {
            localStorage.setItem("CREATOR_ID", JSON.stringify(id));
            navigate("/new/wonder", "slideNext");
          }}
        >
          새로 작성하기
        </Button>
      </div>
    </div>
  );
}
