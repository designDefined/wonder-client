import styles from "./View.module.scss";
import { useParams } from "../../libs/Codex";
import { Wonder } from "../../entity/wonder/wonder";
import api from "../../api";
import { useJSONFetch } from "../../libs/Admon";
import { keysOfWonder } from "../../entity/emptyEntity";
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

export default function View() {
  const wonderId = useParams()?.wonder_id;
  const wonderData = useJSONFetch<Wonder>(
    api.get<Wonder>(`/wonder/${wonderId ?? "error"}`),
    keysOfWonder,
    [],
  );

  return (
    <main className={styles.View}>
      <DefaultHeader />
      <Cover data={pick(["title", "summary", "thumbnail"], wonderData.read)} />
      <div className={styles.main}>
        <Creator creator={wonderData.read.creator} />
        <Tags tags={wonderData.read.tags} />
        <Period schedule={wonderData.read.schedule} />
        <Button
          label="예약하기"
          attribute={{ size: "big", theme: "default" }}
          onClick={() => null}
          className={styles.reserveButton}
        />
        <Location />
        <Schedules schedules={wonderData.read.schedule} />
        <Content content={wonderData.read.content} />
      </div>
    </main>
  );
}
