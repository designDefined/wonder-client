import classNames from "classnames/bind";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import { Wonder } from "../../../entity/wonder";
import { GenreTag } from "../../../entity/wonder/tag";
import Stage0 from "../../../modules/New/Stage0/Stage0";
import Stage1 from "../../../modules/New/Stage1/Stage1";
import Stage2 from "../../../modules/New/Stage2/Stage2";
import Stage3 from "../../../modules/New/Stage3/Stage3";
import StageNavigator from "../../../modules/New/StageNavigator/StageNavigator";
import styles from "./NewWonderPage.module.scss";
import { authedApi } from "../../../api/index";
import { navigate } from "../../../libs/Codex";

const cx = classNames.bind(styles);

export type NewWonderInput = {
  title: string;
  summary: string;
  content: string;
  genre: GenreTag | null;
  thumbnail: Wonder["thumbnail"] | null;
  schedule: Date[]; // sorted
  location: {
    coordinates: { x: number; y: number };
    name: string;
    description: string;
  } | null;
  isReservationRequired: null | boolean;
  reservationProcess: {
    startsAt: Date;
    endsAt: Date;
    amount?: number;
    phone?: boolean;
    email?: boolean;
  } | null;
};

const checkIfNextStageIsAvailable = (stage: number, data: NewWonderInput) => {
  switch (stage) {
    case 0:
      return data.isReservationRequired !== null;
    case 1:
      return (
        data.title.length > 0 &&
        data.summary.length > 0 &&
        // data.content.length > 0 &&
        data.genre !== null
      );
    case 2:
      return data.location !== null && data.schedule.length > 0;
  }

  return false;
};

export default function NewWonderPage() {
  const [stage, setState] = useState(0);
  const [data, setData] = useState<NewWonderInput>({
    title: "",
    summary: "",
    content: "",
    thumbnail: null,
    genre: null,
    schedule: [],
    location: null,
    isReservationRequired: null,
    reservationProcess: null,
  });

  return (
    <>
      <DefaultHeader />
      <main className={cx("NewWonderPage")}>
        <StageNavigator currentStage={stage} />
        {stage === 0 && (
          <Stage0
            data={data.isReservationRequired}
            setter={(value) =>
              setData({ ...data, isReservationRequired: value })
            }
          />
        )}
        {stage === 1 && (
          <Stage1
            data={{
              thumbnail: data.thumbnail,
              title: data.title,
              summary: data.summary,
              content: data.content,
              genre: data.genre,
            }}
            setter={(value) => setData({ ...data, ...value })}
          />
        )}
        {stage === 2 && (
          <Stage2
            data={{ schedule: data.schedule, location: data.location }}
            setter={(value) => setData({ ...data, ...value })}
          />
        )}
        {stage === 3 && (
          <Stage3
            data={{
              reservationProcess: data.reservationProcess,
              isReservationRequired: data.isReservationRequired,
            }}
            setter={(value) => setData({ ...data, ...value })}
          />
        )}
        <div className={cx("buttons")}>
          <Button
            className={cx("previousButton")}
            onClick={() => {
              if (stage === 0) return;
              setState(stage - 1);
            }}
          >
            이전
          </Button>
          <Button
            className={cx("nextButton")}
            isMainColored
            isDisabled={!checkIfNextStageIsAvailable(stage, data)}
            onClick={() => {
              if (stage < 2) {
                setState(stage + 1);
              } else {
                if (
                  confirm(
                    "예약 기간이 시작하면 이벤트 내용만 수정 가능하며, 이벤트 일시 및 예약 관련 내용은 수정이 불가능해요. 이벤트를 업로드할까요?",
                  )
                ) {
                  authedApi
                    .post<{ wonderId: number }>("/wonder/new", data)
                    .then(({ wonderId }) =>
                      navigate(`/view/${wonderId}`, "slideNext"),
                    )
                    .catch(() =>
                      alert("알 수 없는 에러, 관리자에게 문의하세요."),
                    );
                  console.log("!!!");
                }
              }
            }}
          >
            다음
          </Button>
        </div>
      </main>
    </>
  );
}
