import styles from "./Reserved.module.scss";
import { authedApi } from "../../../api";
import MyPageSubHeader from "../../../components/MyPage/MyPageSubHeader/MyPageSubHeader";
import { WonderSummaryReserved } from "../../../components/MyPage/WonderSummary/WonderSummary";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import useFetch from "../../../libs/ReactAssistant/useFetch";
import { WonderSummaryReservation } from "../../../types/wonder/WonderSummary";

export default function Reserved() {
  const [reservedWonders] = useFetch<WonderSummaryReservation[]>(
    () => authedApi.get("/user/reserved"),
    [],
  );
  return (
    <>
      <DefaultHeader />
      <MyPageSubHeader title="예약/예매내역 확인" />
      <div className={styles.Reserved}>
        {reservedWonders &&
          reservedWonders.map((wonder) => (
            <WonderSummaryReserved key={wonder.id} wonder={wonder} />
          ))}
      </div>
    </>
  );
}
