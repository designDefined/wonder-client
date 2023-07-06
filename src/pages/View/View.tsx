import styles from "./View.module.scss";
import { useCodex, useParams } from "../../libs/Codex";
import api, { authedApi } from "../../api";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import Cover from "../../components/View/Cover/Cover";
import { pick } from "ramda";
import Creator from "../../components/View/Creator/Creator";
import Button from "../../components/common/Button/Button";
import Tags from "../../components/View/Tags/Tags";
import Period from "../../components/View/Period/Period";
import Location from "../../components/View/Location/Location";
import Schedules from "../../components/View/Schedules/Schedules";
import Content from "../../components/View/Content/Content";
import { useCallback, useEffect } from "react";
import { WonderDetail } from "../../types/wonder/wonderDetail";
import { useAccount } from "../../store/account/useAccount";
import useFetch from "../../libs/ReactAssistant/useFetch";
import { openTray } from "../../libs/Tray/useTray";
import ReservationPanel from "../../components/View/ReservationPanel/ReservationPanel";

export default function View() {
  const user = useAccount((state) => state.user);
  const wonderId = useParams()?.wonder_id;

  const [wonderData, , refetchWonderData] = useFetch<WonderDetail>(
    () => authedApi.get<WonderDetail>(`/wonder/${wonderId ?? "-1"}`),
    [user],
  );
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

  useEffect(() => {
    console.log(wonderId);
  }, [wonderId]);

  if (!wonderData) {
    return <div></div>;
  }

  return (
    <main className={styles.View}>
      <DefaultHeader />
      <Cover
        data={pick(["title", "summary", "thumbnail", "liked"], wonderData)}
        onLike={onLike}
      />
      <div className={styles.main}>
        <Creator creator={wonderData.creator} />
        <Tags tags={wonderData.tags} />
        <Period schedule={wonderData.schedule} />

        <Button
          label="예약하기"
          attribute={{ size: "big", theme: "default" }}
          onClick={() => {
            if (user) {
              openTray(() => (
                <ReservationPanel wonder={wonderData} userId={user.id} />
              ));
            }
          }}
          className={styles.reserveButton}
        />
        <Location />
        <Schedules schedules={wonderData.schedule} />
        <Content content={wonderData.content} />
      </div>
    </main>
  );
}
