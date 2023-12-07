import styles from "./Reserved.module.scss";
import { authedApi } from "../../../api";
import MyPageSubHeader from "../../../components/MyPage/MyPageSubHeader/MyPageSubHeader";
import { WonderSummaryReserved } from "../../../components/MyPage/WonderSummary/WonderSummary";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import useFetch from "../../../libs/ReactAssistant/useFetch";
import { WonderSummaryReservation } from "../../../types/wonder/WonderSummary";
import { getMeDetail } from "../../../api/user";
import { useQuery } from "@tanstack/react-query";
import Card from "../../../components/Card/Card";

export default function Reserved() {
  const { isLoading, error, data } = useQuery(getMeDetail);

  return (
    <>
      <DefaultHeader />
      <MyPageSubHeader title="예약/예매내역 확인" />
      <div className={styles.Reserved}>
        {data?.reservedWonders &&
          data.reservedWonders.map((reservation) => (
            <Card.Reserved
              key={reservation.id}
              wonder={reservation.wonder}
              reservation={reservation}
              isSimple
              isPassedReservation={false}
            />
          ))}
      </div>
    </>
  );
}
