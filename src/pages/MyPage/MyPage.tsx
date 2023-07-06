import styles from "./MyPage.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import { navigate } from "../../libs/Codex";
import { useAccount } from "../../store/account/useAccount";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import useFetch from "../../libs/ReactAssistant/useFetch";
import { MyWonderSummary } from "../../types/wonder/WonderSummary";
import { authedApi } from "../../api";
import {
  WonderSummaryReserved,
  WonderSummarySimple,
} from "../../components/MyPage/WonderSummary/WonderSummary";
import ProfileSection from "../../components/MyPage/ProfileSection/ProfileSection";

const cx = classNames.bind(styles);

export default function MyPage() {
  const me = useAccount((state) => state.user);
  const [myWonderSummary] = useFetch<MyWonderSummary>(
    () => authedApi.get("/user/myWonderSummary"),
    [],
  );

  if (!(me && myWonderSummary)) {
    return <DefaultHeader />;
  }

  return (
    <>
      <DefaultHeader />
      <ProfileSection />
      <div className={cx("MyPage")}>
        <div className={cx("section")}>
          <SectionTitle
            title="예약/예매 내역"
            attribute={{ size: "medium" }}
            onClick={() => navigate("me/reserved", "slideNext")}
          />

          {myWonderSummary.reserved ? (
            <WonderSummaryReserved wonder={myWonderSummary.reserved} />
          ) : (
            <div />
          )}
        </div>
        <div className={cx("section")}>
          <SectionTitle
            title="좋아요"
            attribute={{ size: "medium" }}
            onClick={() => navigate("me/liked", "slideNext")}
          />
          {myWonderSummary.liked ? (
            <WonderSummarySimple wonder={myWonderSummary.liked} />
          ) : (
            <div />
          )}
        </div>
        <div className={cx("creators")}>
          <SectionTitle
            title="크리에이터 페이지"
            attribute={{ size: "medium" }}
          />
          <button className={cx("smallButton")}> + </button>

          <div className={cx("list")}>
            <div className={cx("new")}>
              <button
                className={cx("bigButton")}
                onClick={() => navigate("/new/creator", "slideNext")}
              >
                {" "}
                +{" "}
              </button>
              <div className={cx("description")}>
                크리에이터 페이지가 없어요! <br />
                하나 추가해보세요 {`:)`}
              </div>
            </div>
          </div>
        </div>
        <div className={cx("section")}>
          <SectionTitle
            title="내 티켓북"
            attribute={{ size: "medium" }}
            onClick={() => navigate("me/ticketbook", "slideNext")}
          />
          {myWonderSummary.ticketBook ? (
            <WonderSummaryReserved wonder={myWonderSummary.ticketBook} />
          ) : (
            <div />
          )}
        </div>
      </div>
    </>
  );
}
