import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import { getMeDetail } from "../../../api/user";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import Title from "../../../components/Title/Title";
import { navigate } from "../../../libs/Codex";
import styles from "./Modify.module.scss";

const cx = classNames.bind(styles);

export default function Modify() {
  const { isLoading, error, data } = useQuery(getMeDetail);

  if (isLoading || error || !data)
    return <div>{isLoading ? "로딩 중" : "에러"}</div>;

  return (
    <>
      <DefaultHeader />
      <main className={cx("Modify")}>
        <div className={cx("toPrevious")}>
          <img
            src={"/assets/icon/arrow_back.svg"}
            onClick={() => navigate("/me", "slidePrevious")}
          />
          <div>내 정보 수정</div>
        </div>
        <div className={cx("profileArea")}>
          <div>
            <img
              className={cx("profileImg")}
              src={data.profileImage.src}
              alt={data.profileImage.altText}
            />
          </div>
        </div>
        <div className={cx("fields")}>
          <Title.Arrow
            title="이름"
            onClick="/me/modify/name"
            currentValue={data.name}
          />
          <div className={cx("divider")} />
          <Title.Arrow title="휴대폰 번호 변경 " onClick="/me/modify/phone" />
          <div className={cx("divider")} />
        </div>
      </main>
    </>
  );
}
