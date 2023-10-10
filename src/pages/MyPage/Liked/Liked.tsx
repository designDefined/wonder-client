import styles from "./Liked.module.scss";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import MyPageSubHeader from "../../../components/MyPage/MyPageSubHeader/MyPageSubHeader";
import { authedApi } from "../../../api";
import { WonderSummaryTitleOnly } from "../../../types/wonder/WonderSummary";
import useFetch from "../../../libs/ReactAssistant/useFetch";
import { WonderSummarySimple } from "../../../components/MyPage/WonderSummary/WonderSummary";

export default function Liked() {
  const [likedWonders] = useFetch<WonderSummaryTitleOnly[]>(
    () => authedApi.get("/user/liked"),
    [],
  );
  return (
    <>
      <DefaultHeader />
      <MyPageSubHeader title="좋아요 한 이벤트" />
      <div className={styles.Liked}>
        {likedWonders &&
          likedWonders.map((wonder) => (
            <WonderSummarySimple key={wonder.id} wonder={wonder} />
          ))}
      </div>
    </>
  );
}
