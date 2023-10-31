import styles from "./NewCreatorPage.module.scss";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import classNames from "classnames/bind";
import { useState } from "react";
import Input from "../../../components/Input/Input";
import { useMutation } from "@tanstack/react-query";
import { postNewCreator } from "../../../api/creator";
import Button from "../../../components/Button/Button";
import { navigate } from "../../../libs/Codex";

const cx = classNames.bind(styles);

const validate = ({
  name,
  summary,
  instagram,
}: {
  name: string;
  summary: string;
  instagram?: string;
}) => {
  if (name.length === 0) return "크리에이터명을 입력해주세요";
  if (name.length > 15) return "크리에이터명은 15자 이내로 작성해주세요";
  if (summary.length === 0) return "한 줄 소개를 입력해주세요";
  if (summary.length > 30) return "한 줄 소개는 30자 이내로 작성해주세요";
  if (instagram && instagram[0] !== "@")
    return "인스타그램 계정명은 @으로 시작해야 합니다";
  return null;
};

export default function NewCreatorPage() {
  const { mutate } = useMutation({
    ...postNewCreator(),
    onSuccess: (res) => {
      navigate(`/creator/${res.creatorId}`);
    },
  });
  const [inputValue, setInputvalue] = useState<{
    name: string;
    summary: string;
    instagram?: string;
  }>({
    name: "",
    summary: "",
  });

  return (
    <>
      <DefaultHeader />
      <main className={cx("NewCreatorPage")}>
        <div className={cx("title")}>크리에이터 페이지 생성 📄</div>
        <div className={cx("description")}>
          크리에이터 페이지는 단체의 구성원들과 함께 이벤트를 올리고 홍보할 수
          있는 페이지예요. <br />
          크리에이터 페이지를 생성하고 자유롭게 이벤트를 홍보해보세요!
        </div>
        <div className={styles.forms}>
          <Input.Text
            title="크리에이터명"
            value={inputValue.name}
            placeholder="15자 이내로 작성해주세요."
            maxLength={15}
            onChange={(e) =>
              setInputvalue({ ...inputValue, name: e.target.value })
            }
            isHintAvailable
          />
          <Input.Text
            title="크리에이터 한 줄 소개"
            value={inputValue.summary}
            placeholder="30자 이내로 작성해주세요."
            maxLength={30}
            onChange={(e) =>
              setInputvalue({ ...inputValue, summary: e.target.value })
            }
            isHintAvailable
          />
          <Input.Text
            title="공식 인스타그램 계정"
            value={inputValue.instagram ?? ""}
            placeholder="인스타그램 계정이 있다면 작성해주세요. (ex. @uuonder)"
            onChange={(e) =>
              setInputvalue({ ...inputValue, instagram: e.target.value })
            }
            onValidateError={(value) => {
              if (value.length === 0) return null;
              return value[0] !== "@"
                ? "@으로 시작하는 계정명을 적어주세요"
                : null;
            }}
            isHintAvailable
          />
        </div>
        <Button
          isFullWidth
          isMainColored
          isDisabled={validate(inputValue) !== null}
          onClick={() => {
            mutate(inputValue);
          }}
        >
          완료!
        </Button>
      </main>
    </>
  );
}
