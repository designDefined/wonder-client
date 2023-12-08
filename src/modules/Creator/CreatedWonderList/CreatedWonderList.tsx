import styles from "./CreatedWonderList.module.scss";
import classNames from "classnames/bind";
import { CreatorDisplay } from "../../../entity/creator/display";
import { useMemo, useState } from "react";
import Card from "../../../components/Card/Card";
import Button from "../../../components/Button/Button";
import { navigate } from "../../../libs/Codex";

const cx = classNames.bind(styles);

type CreatedWonderListProps = {
  createdWonder: CreatorDisplay["createdWonder"];
};

export default function CreatedWonderList({
  createdWonder,
}: CreatedWonderListProps) {
  const [currentTab, setCurrentTab] = useState<"now" | "finished">("now");
  const filteredWonder = useMemo(() => {
    const now = createdWonder.filter(
      (wonder) => wonder.tag.status !== "finished",
    );
    const finished = createdWonder.filter(
      (wonder) => wonder.tag.status === "finished",
    );
    return {
      now,
      finished,
    };
  }, [createdWonder]);
  return (
    <div className={cx("CreatedWonderList")}>
      <div className={cx("tabs")}>
        <div
          className={cx("tab", { current: currentTab === "now" })}
          onClick={() => setCurrentTab("now")}
        >
          진행 중{currentTab === "now" && <div className={cx("underline")} />}
        </div>
        <div
          className={cx("tab", { current: currentTab === "finished" })}
          onClick={() => setCurrentTab("finished")}
        >
          진행 완료
          {currentTab === "finished" && <div className={cx("underline")} />}
        </div>
      </div>
      {filteredWonder[currentTab].length === 0 && (
        <div className={cx("noList")}>
          <img src={"/assets/icon/caution.svg"} alt="caution icon" />
          <div className={cx("message")}>앗! 이벤트가 존재하지 않아요.</div>
        </div>
      )}
      <div className={cx("list")}>
        {filteredWonder[currentTab].map((wonder) => (
          <>
            <Card.Searched
              className={cx("card")}
              key={wonder.id}
              wonder={wonder}
            />
            <Button
              isFullWidth
              isSmallSized
              onClick={() => navigate(`/modify/${wonder.id}`)}
            >
              이벤트 수정하기
            </Button>
          </>
        ))}
      </div>
    </div>
  );
}
