import styles from "./NewCreatorPage.module.scss";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import classNames from "classnames/bind";
import LabeledTextForm from "../../../components/New/LabeledTextForm/LabeledTextForm";
import { NewCreator } from "../../../types/creator/newCreator";
import { useCallback, useState } from "react";
import { NewWonder } from "../../../types/wonder/newWonder";
import Button from "../../../components/common/Button/Button";

const cx = classNames.bind(styles);

type Setter<T extends Record<string, any>> = <K extends keyof T>(
  key: K,
  value: T,
) => void;

export default function NewCreatorPage() {
  const [newCreator, setNewCreator] = useState<NewCreator>({
    name: "",
    summary: "",
    instagram: "",
  });

  const setNewCreatorValue = useCallback(
    (key: keyof NewCreator, value: any) =>
      setNewCreator({ ...newCreator, [key]: value }),
    [],
  );

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
            value={newCreator.name}
            onChange={(e) => setNewCreatorValue("summary", e.target.value)}
            placeHolder={"30자 이내로 작성해주세요."}
            isMandatory={true}
          />{" "}
          <LabeledTextForm
            label={"크리에이터명"}
            value={newCreator.name}
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
          onClick={() => null}
        />
      </main>
    </>
  );
}
