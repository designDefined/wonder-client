import styles from "./NewCreatorPage.module.scss";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import classNames from "classnames/bind";
import LabeledTextForm from "../../../components/New/creator/LabeledTextForm/LabeledTextForm";
import { NewCreator } from "../../../types/creator/newCreator";
import Button from "../../../components/common/Button/Button";
import { authedApi } from "../../../api";
import { navigate } from "../../../libs/Codex";
import { getUserToken } from "../../../libs/AutoLogin/autoLogin";
import useEnhancedState from "../../../libs/ReactAssistant/useEnhancedState";
import {
  isValidCreatorName,
  isValidCreatorSummary,
  isValidInstagram,
} from "../../../libs/validator";

const cx = classNames.bind(styles);

export default function NewCreatorPage() {
  const token = getUserToken();

  const [newCreator, , setNewCreatorValue] = useEnhancedState<
    NewCreator & { instagram: string }
  >({
    name: "",
    summary: "",
    instagram: "",
  });
  if (!token) {
    alert("로그인 후 이용해주세요.");
    navigate("/");
  }

  return (
    <>
      <DefaultHeader />
      <main className={cx("NewCreatorPage")}>
        <div className={cx("title")}>크리에이터 페이지 생성</div>
        <div className={cx("description")}>
          크리에이터 페이지는 단체의 구성원들과 함께 이벤트를 올리고 홍보할 수
          있는 페이지예요. <br />
          크리에이터 페이지를 생성하고 자유롭게 이벤트를 홍보해보세요!
        </div>
        <div className={styles.forms}>
          <LabeledTextForm
            label={"크리에이터명"}
            value={newCreator.name}
            onChange={(e) => setNewCreatorValue("name", e.target.value)}
            placeHolder={"15자 이내로 작성해주세요."}
            isMandatory={true}
          />
          <LabeledTextForm
            label={"크리에이터 한 줄 소개"}
            value={newCreator.summary}
            onChange={(e) => setNewCreatorValue("summary", e.target.value)}
            placeHolder={"30자 이내로 작성해주세요."}
            isMandatory={true}
          />
          <LabeledTextForm
            label={"인스타그램 계정"}
            value={newCreator.instagram}
            onChange={(e) => setNewCreatorValue("instagram", e.target.value)}
            placeHolder={
              "인스타그램 계정이 있다면 작성해주세요. (ex. @uuonder)"
            }
            isMandatory={false}
          />
        </div>
        <Button
          label={"완료!"}
          attribute={{ size: "big", theme: "default" }}
          onClick={() => {
            const { name, summary, instagram } = newCreator;
            if (!isValidCreatorName(name)) {
              alert("적절한 이름을 입력해주세요.");
              return;
            }
            if (!isValidCreatorSummary(summary)) {
              alert("적절한 소개를 입력해주세요.");
              return;
            }
            if (!isValidInstagram(instagram)) {
              alert("적절하지 않은 인스타그램 계정입니다.");
              return;
            }
            void authedApi
              .post("/creator/new", {
                name,
                summary,
                instagram,
              })
              .then((res) => {
                const data = res as { isSuccess: boolean; createdId: number };
                if (data.isSuccess)
                  navigate(`/creator/${data.createdId}`, "slideNext");
              });
          }}
        />
      </main>
    </>
  );
}
