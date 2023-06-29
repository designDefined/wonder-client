import styles from "./MyPage.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import { navigate } from "../../libs/Codex";
import { useMyAccountStore } from "../../store/account/useMyAccountStore";
import { useEffect } from "react";
import BarButton from "../../components/New/wonder/BarButton/BarButton";

const cx = classNames.bind(styles);

export default function MyPage() {
  const me = useMyAccountStore((state) => state.data);

  if (!me) {
    return <div />;
  }

  useEffect(() => {
    if (!me) {
      alert("로그인 후 이용해주세요.");
      navigate("/");
    }
  });

  return (
    <div className={cx("MyPage")}>
      <DefaultHeader />
      <div className={cx("my")}>
        <div className={cx("name")}>{me.nickname}</div>
      </div>
      <div className={cx("events")}>
        <BarButton
          title={"예약 / 예매 내역"}
          interaction={{ type: "click", onClick: () => null }}
          isBold={true}
        />
        <BarButton
          title={"예약 / 예매 내역"}
          interaction={{ type: "click", onClick: () => null }}
          isBold={true}
        />
        <BarButton
          title={"예약 / 예매 내역"}
          interaction={{ type: "click", onClick: () => null }}
          isBold={true}
        />
      </div>
    </div>
  );
}
