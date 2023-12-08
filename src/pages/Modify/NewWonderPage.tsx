import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import { Wonder } from "../../entity/wonder";
import { GenreTag } from "../../entity/wonder/tag";
import Stage0 from "../../modules/New/Stage0/Stage0";
import Stage1 from "../../modules/New/Stage1/Stage1";
import Stage2 from "../../modules/New/Stage2/Stage2";
import Stage3 from "../../modules/New/Stage3/Stage3";
import StageNavigator from "../../modules/New/StageNavigator/StageNavigator";
import styles from "./NewWonderPage.module.scss";
import { navigate, useParams } from "../../libs/Codex";
import { getWonderDetail, postNewWonder, putNewWonder } from "../../api/wonder";
import { useMutation, useQuery } from "@tanstack/react-query";
import Title from "../../components/Title/Title";

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
        data.thumbnail !== null &&
        data.title.length > 0 &&
        data.summary.length > 0 &&
        data.content.length > 0 &&
        data.genre !== null
      );
    case 2:
      return data.location !== null && data.schedule.length > 0;
    case 3:
      return data.reservationProcess !== null;
  }

  return false;
};

export default function ModifyWonderPage() {
  const [stage, setState] = useState(1);
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
  const wonderId = useParams()?.wonder_id;
  const { isLoading, data: wonderData } = useQuery(
    getWonderDetail(Number(wonderId) ?? -1),
  );
  const { mutate } = useMutation({
    ...putNewWonder(),
    onSuccess: () => {
      if (wonderId) navigate(`/view/${wonderId}`, "slideNext");
    },
  });

  useEffect(() => {
    if (wonderData) {
      setData({
        title: wonderData.title,
        summary: wonderData.summary,
        content: wonderData.content,
        thumbnail: wonderData.thumbnail,
        genre: wonderData.tag.genre,
        schedule: wonderData.schedule.map((s) => new Date(s)),
        location: wonderData.location,
        reservationProcess: wonderData.reservationProcess
          ? {
              ...wonderData.reservationProcess,
              startsAt: new Date(wonderData.reservationProcess.startsAt),
              endsAt: new Date(wonderData.reservationProcess.endsAt),
            }
          : null,
        isReservationRequired: wonderData.reservationProcess !== null,
      });
    }
  }, [wonderData]);

  if (!localStorage.getItem("CREATOR_ID")) {
    alert("잘못된 접근입니다.");
    navigate("/", "slidePrevious");
    return <></>;
  }

  if (isLoading)
    return (
      <>
        <DefaultHeader />
        <main className={cx("View")}>
          <div className={cx("mainContent")}></div>
        </main>
      </>
    );

  if (!wonderData) return <div>에러!</div>;

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
              if (stage < 2 || (stage === 2 && data.isReservationRequired)) {
                setState(stage + 1);
              } else {
                if (
                  confirm(
                    "예약 기간이 시작하면 이벤트 내용만 수정 가능하며, 이벤트 일시 및 예약 관련 내용은 수정이 불가능해요. 이벤트를 업로드할까요?",
                  )
                ) {
                  const creatorId = localStorage.getItem("CREATOR_ID");
                  mutate({ data, creatorId: Number(creatorId) });
                }
              }
            }}
          >
            {stage < 2 || (stage === 2 && data.isReservationRequired)
              ? "다음"
              : "완료"}
          </Button>
        </div>
      </main>
    </>
  );
}
