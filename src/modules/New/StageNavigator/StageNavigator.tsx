import classNames from "classnames/bind";
import { range } from "lodash";
import styles from "./StageNavigator.module.scss";

const cx = classNames.bind(styles);

type Props = {
  currentStage: number;
};

export default function StageNavigator({ currentStage }: Props) {
  return (
    <div className={cx("StageNavigator")}>
      <div className={cx("stageName")}>
        {currentStage === 0 && "예약 여부"}
        {currentStage === 1 && "이벤트 내용"}
        {currentStage === 2 && "이벤트 장소 및 일정"}
        {currentStage === 3 && "예약"}
      </div>
      <div className={cx("bars")}>
        {range(0, 4).map((i) => (
          <div key={i} className={cx("bar", { current: i === currentStage })} />
        ))}
      </div>
      <div className={cx("title")}>
        {currentStage === 0 && "예약자를 받는 이벤트인가요?"}
        {currentStage === 1 && "이벤트 내용을 작성해볼까요?"}
        {currentStage === 2 && "이벤트의 장소와 일정을 알려주세요."}
        {currentStage === 3 && "예약 관련 사항을 정해볼까요?"}
      </div>
      <div className={cx("description")}>
        {currentStage === 0 &&
          "예약자에게서 받을 정보, 예약 일정 및 인원수를 설정할 수 있어요."}
      </div>
    </div>
  );
}
