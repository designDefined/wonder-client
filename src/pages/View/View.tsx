import styles from "./View.module.scss";
import { useCodex, useParams } from "../../libs/Codex";
import api from "../../api";
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
import { WonderView } from "../../types/wonder/wonderView";
import useFetch from "../../libs/Fetch/useFetch";
import { useEffect } from "react";

export default function View() {
  //  const wonderId = useParams()?.wonder_id;
  const wonderId = useCodex((state) => state.currentParams)?.wonder_id;
  const [wonderData] = useFetch<WonderView>(
    api.get<WonderView>(`/wonder/${wonderId ?? "-1"}`),
    [],
  );

  useEffect(() => {
    console.log(wonderId);
  }, [wonderId]);

  if (!wonderData) {
    return <div></div>;
  }

  return (
    <main className={styles.View}>
      <DefaultHeader />
      <Cover data={pick(["title", "summary", "thumbnail"], wonderData)} />
      <div className={styles.main}>
        <Creator creator={wonderData.creator} />
        <Tags tags={wonderData.tags} />
        <Period schedule={wonderData.schedule} />
        <Button
          label="예약하기"
          attribute={{ size: "big", theme: "default" }}
          onClick={() => null}
          className={styles.reserveButton}
        />
        <Location />
        <Schedules schedules={wonderData.schedule} />
        <Content content={wonderData.content} />
      </div>
    </main>
  );
}
