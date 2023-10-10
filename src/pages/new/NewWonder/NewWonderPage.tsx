import styles from "./NewWonderPage.module.scss";
import TextInput from "../../../components/common/TextInput/TextInput";
import { NewWonder } from "../../../types/wonder/newWonder";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import RichTextArea from "../../../components/New/wonder/RichTextArea/RichTextArea";
import ThumbnailUploader from "../../../components/New/wonder/ThumbnailUploader/ThumbnailUploader";
import Button from "../../../components/common/Button/Button";
import { authedApi } from "../../../api";
import { navigate } from "../../../libs/Codex";
import BarButton from "../../../components/New/wonder/BarButton/BarButton";
import { openTray, useTray } from "../../../libs/Tray/useTray";
import DatePanel from "../../../components/New/wonder/panels/DatePanel/DatePanel";
import { useEffect } from "react";
import { getCreatorToken } from "../../../libs/AutoLogin/autoLogin";
import LocationPanel from "../../../components/New/wonder/panels/LocationPanel/LocationPanel";
import useEnhancedState from "../../../libs/ReactAssistant/useEnhancedState";
import {
  isValidWonderLocation,
  isValidWonderSchedule,
  isValidWonderThumbnail,
  isValidWonderTitle,
} from "../../../libs/validator";

const formatTagExceptLast = (value: string): NewWonder["tags"] => {
  const splits = value.split(" ");
  const mapped = splits.map((chunk, index) =>
    index !== splits.length - 1 && chunk[0] !== "#" && chunk.length > 0
      ? "#" + chunk
      : chunk,
  );
  return mapped;
};

const formatAllTags = (tags: NewWonder["tags"]): NewWonder["tags"] =>
  tags.map((chunk) =>
    chunk[0] !== "#" && chunk.length > 0 ? "#" + chunk : chunk,
  );

const emptyReservation: NewWonder["reservationProcess"] = {
  requireName: false,
  requirePhoneNumber: false,
  requireEmail: false,
};
const toggleReservationDetail =
  (propertyName: keyof typeof emptyReservation, value: boolean) =>
  (
    currentProcess: NewWonder["reservationProcess"],
  ): NewWonder["reservationProcess"] =>
    currentProcess
      ? {
          ...currentProcess,
          [propertyName]: value,
        }
      : { ...emptyReservation, [propertyName]: value };

const summarizeScheduleToString = (schedule: NewWonder["schedule"]): string => {
  if (schedule.length === 0) return "";
  if (schedule.length === 1) return schedule[0].date.join(". ");
  return `${schedule[0].date.slice(1).join(". ")} ~ ${schedule[
    schedule.length - 1
  ].date
    .slice(1)
    .join(". ")}`;
};

export default function NewWonderPage() {
  const token = getCreatorToken();
  const [newWonder, , setNewWonderValue] = useEnhancedState<NewWonder>({
    thumbnail: null,
    title: "",
    summary: "",
    tags: [],
    content: "",
    schedule: [],
    location: { x: 0, y: 0, name: "" },
    reservationProcess: false,
  });

  const hasTray = useTray((state) => state.target);

  useEffect(() => {
    /* 
    if (token === null) {
      alert("크리에이터를 선택하세요");
      navigate("/me");
    }*/
  }, []);

  if (token === null) return <div />;

  return (
    <>
      <DefaultHeader />
      <main
        className={`${styles.NewWonderPage} ${hasTray ? styles.noScroll : ""}`}
      >
        <ThumbnailUploader
          value={newWonder.thumbnail}
          setValue={(data) => setNewWonderValue("thumbnail", data)}
        />
        <div className={styles.mainContent}>
          <TextInput
            title={"이벤트 제목"}
            value={newWonder.title}
            onChange={(e) => setNewWonderValue("title", e.target.value)}
            placeholder={"30자 이내. 예) 2023년 2학기 정보문화학 과제전"}
          />
          <TextInput
            title={"이벤트 태그"}
            value={newWonder.tags.join(" ")}
            onChange={(e) =>
              setNewWonderValue("tags", formatTagExceptLast(e.target.value))
            }
            onBlur={() => {
              setNewWonderValue("tags", formatAllTags(newWonder.tags));
            }}
            placeholder={"예) 연극, 뮤지컬, 일일호프, 연주회, 전시"}
          />
          <TextInput
            title={"이벤트 한 줄 요약"}
            value={newWonder.summary}
            onChange={(e) => setNewWonderValue("summary", e.target.value)}
            placeholder={"이벤트를 요약하는 내용을 작성해주세요."}
          />
          <RichTextArea
            title={"이벤트 내용"}
            value={newWonder.content}
            onChange={(e) => setNewWonderValue("content", e.target.value)}
            placeholder={
              "/* 여기도 뭐 유의사항 적어놓자.. 1000자 이내.. 이미지는 10장 이내.. 대충 이런거 */"
            }
          />
          <div className={styles.divider} />
          <BarButton
            title={"이벤트 일정"}
            interaction={{
              type: "click",
              onClick: () =>
                openTray(() => (
                  <DatePanel
                    schedule={newWonder.schedule}
                    setSchedule={(schedule) => {
                      setNewWonderValue("schedule", schedule);
                    }}
                  />
                )),
            }}
            subText={summarizeScheduleToString(newWonder.schedule)}
            isBold={false}
          />
          <BarButton
            title={"이벤트 장소"}
            interaction={{
              type: "click",
              onClick: () =>
                openTray(() => (
                  <LocationPanel
                    currentLocation={newWonder.location}
                    setCurrentLocation={(e) => setNewWonderValue("location", e)}
                  />
                )),
            }}
            subText={newWonder.location.name}
            isBold={false}
          />
          <div className={styles.divider} />
          <BarButton
            title={"예약 / 예매"}
            interaction={{
              type: "toggle",
              value: newWonder.reservationProcess !== false,
              onToggle: (value) =>
                setNewWonderValue(
                  "reservationProcess",
                  value ? emptyReservation : false,
                ),
            }}
            isBold={true}
          />
          <div className={styles.reservationDetail}>
            <BarButton
              title={"이름을 받을게요"}
              interaction={{
                type: "toggle",
                value: newWonder.reservationProcess
                  ? newWonder.reservationProcess.requireName
                  : false,
                onToggle: (value) =>
                  setNewWonderValue(
                    "reservationProcess",
                    toggleReservationDetail(
                      "requireName",
                      value,
                    )(newWonder.reservationProcess),
                  ),
              }}
              isBold={false}
            />
            <BarButton
              title={"전화번호를 받을게요"}
              interaction={{
                type: "toggle",
                value: newWonder.reservationProcess
                  ? newWonder.reservationProcess.requirePhoneNumber
                  : false,
                onToggle: (value) =>
                  setNewWonderValue(
                    "reservationProcess",
                    toggleReservationDetail(
                      "requirePhoneNumber",
                      value,
                    )(newWonder.reservationProcess),
                  ),
              }}
              isBold={false}
            />
            <BarButton
              title={"메일 주소를 받을게요"}
              interaction={{
                type: "toggle",
                value: newWonder.reservationProcess
                  ? newWonder.reservationProcess.requireEmail
                  : false,
                onToggle: (value) =>
                  setNewWonderValue(
                    "reservationProcess",
                    toggleReservationDetail(
                      "requireEmail",
                      value,
                    )(newWonder.reservationProcess),
                  ),
              }}
              isBold={false}
            />
          </div>
          <Button
            label={"원더 생성하기"}
            attribute={{ size: "big", theme: "default" }}
            onClick={() => {
              const { title, location, schedule, thumbnail } = newWonder;
              if (!isValidWonderTitle(title)) {
                alert("적절한 제목을 입력해주세요.");
                return;
              }
              if (!isValidWonderLocation(location)) {
                alert("적절한 장소를 입력해주세요.");
                return;
              }
              if (!isValidWonderSchedule(schedule)) {
                alert("적절한 일정을 입력해주세요.");
                return;
              }
              if (!isValidWonderThumbnail(thumbnail)) {
                alert("적절한 썸네일을 입력해주세요.");
                return;
              }
              authedApi
                .post(`/wonder/new/${token}`, newWonder)
                .then((res) => {
                  const data = res as
                    | { isSuccess: true; createdId: number }
                    | { isSuccess: false };
                  if (data.isSuccess) {
                    navigate(`/view/${data.createdId}`, "slideNext");
                  } else {
                    console.log(data);
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />
        </div>
      </main>
    </>
  );
}
