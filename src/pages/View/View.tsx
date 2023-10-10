import styles from "./View.module.scss";
import { useParams } from "../../libs/Codex";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import { useEffect } from "react";
import { useAccount } from "../../store/account/useAccount";
import { ChipLoading } from "../../components/common/Chip/Chip";
import { useQuery } from "@tanstack/react-query";
import { getWonderDetail } from "../../api/wonder";
import classNames from "classnames/bind";
import Cover from "../../modules/View/Cover/Cover";
import Title from "../../modules/View/Title/Title";

const cx = classNames.bind(styles);

export default function View() {
  // const user = useAccount((state) => state.user);
  const wonderId = useParams()?.wonder_id;

  const {
    isLoading,
    data: wonderData,
    error,
  } = useQuery(getWonderDetail(Number(wonderId) ?? -1));

  /*

  const onLike = useCallback((): void => {
    if (user === null || wonderData === null) {
      alert("먼저 로그인해주세요!");
    } else {
      void authedApi
        .put(`/wonder/${wonderData.id}/like`, {
          value: !wonderData.liked,
        })
        .then(() => refetchWonderData());
    }
  }, [user, wonderData]);

  */

  if (isLoading) return "!";
  // return (
  //   <>
  //     <DefaultHeader />
  //     <main className={styles.ViewEmpty}>
  //       <div className={styles.cover} />
  //       <div className={styles.content}>
  //         <div className={styles.creator} />
  //         <div className={styles.tags}>
  //           <ChipLoading />
  //           <ChipLoading />
  //           <ChipLoading />
  //         </div>
  //         <div className={styles.date} />
  //         <div className={styles.divider} />
  //         <div className={styles.reserve} />
  //       </div>
  //     </main>
  //   </>
  // );

  if (!wonderData) return "에러!";

  return (
    <>
      <DefaultHeader />
      <main className={cx("View")}>
        <Cover thumbnail={wonderData.thumbnail} tag={wonderData.tag} />
        <Title
          title={wonderData.title}
          summary={wonderData.summary}
          schedule={wonderData.schedule}
          reservationProcess={wonderData.reservationProcess}
        />
        <div className={styles.main}>
          {/* <Creator creator={wonderData.creator} /> */}
          {/* <Tags tags={wonderData.tags} /> */}
          {/* <Period schedule={wonderData.schedule} /> */}
          {/* 
          <Button
            label="예약하기"
            attribute={{ size: "big", theme: "default" }}
            onClick={() => {
              if (user) {
                if (wonderData.reservationProcess === false) {
                  alert("예매가 필요 없는 이벤트입니다!");
                } else {
                }
              }
            }}
            className={styles.reserveButton}
          />
          <Location location={wonderData.location} />
          <Schedules schedules={wonderData.schedule} />

          {contents[wonderData.id].map(({ type, content }, i) => (
            <div key={i} className={`${styles.chunk} ${styles[type]}`}>
              {content}
            </div>
          ))} */}
          {/*<Content content={wonderData.content} />*/}
        </div>
      </main>
    </>
  );
}
