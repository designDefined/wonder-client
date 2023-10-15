import styles from "./View.module.scss";
import { useParams } from "../../libs/Codex";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import { useQuery } from "@tanstack/react-query";
import { getWonderDetail } from "../../api/wonder";
import classNames from "classnames/bind";
import Cover from "../../modules/View/Cover/Cover";
import Title from "../../modules/View/Title/Title";
import Content from "../../modules/View/Content/Content";
import Location from "../../modules/View/Location/Location";
import Creator from "../../modules/View/Creator/Creator";

const cx = classNames.bind(styles);

export default function View() {
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

  if (isLoading)
    return (
      <>
        <DefaultHeader />
        <main className={cx("View")}>
          <div className={cx("mainContent")}>
            <Title.Placeholder />
          </div>
        </main>
      </>
    );

  if (!wonderData) return <div>에러!</div>;

  return (
    <>
      <DefaultHeader />
      <main className={cx("View")}>
        <Cover thumbnail={wonderData.thumbnail} tag={wonderData.tag} />
        <div className={cx("mainContent")}>
          <Title
            title={wonderData.title}
            summary={wonderData.summary}
            schedule={wonderData.schedule}
            reservationProcess={wonderData.reservationProcess}
          />
          <div className={cx("divider")} />
          <Content content={wonderData.content} />
          <div className={cx("divider")} />
          <Location location={wonderData.location} />
          <div className={cx("divider")} />
          <Creator creator={wonderData.creator} />
          {/* <Creator /> */}

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
