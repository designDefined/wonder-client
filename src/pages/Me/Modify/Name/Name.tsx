import styles from "./Name.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../../../components/headers/DefaultHeader/DefaultHeader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMeDetail, putMeName } from "../../../../api/user";
import { navigate } from "../../../../libs/Codex";
import Input from "../../../../components/Input/Input";
import { useState } from "react";
import Button from "../../../../components/Button/Button";

const cx = classNames.bind(styles);

export default function Name() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(getMeDetail);
  const { mutate } = useMutation({
    ...putMeName,
    onSuccess: () => queryClient.invalidateQueries(["user", "me"]),
  });
  const [name, setName] = useState<string>(data?.name ?? "");

  if (isLoading || error || !data)
    return <div>{isLoading ? "로딩 중" : "에러"}</div>;

  return (
    <>
      <DefaultHeader />
      <main className={cx("Name")}>
        <div className={cx("toPrevious")}>
          <img
            src={"/assets/icon/arrow_back.svg"}
            onClick={() => navigate("/me/modify", "slidePrevious")}
          />
          <div>이름 수정</div>
        </div>
        <Input.Text
          value={name}
          onChange={(e) => setName(e.target.value)}
          isHintAvailable
          maxLength={15}
        />
        <Button
          isFullWidth
          isMainColored
          onClick={() => mutate({ name })}
          isDisabled={data.name === name}
        >
          저장하기
        </Button>
      </main>
    </>
  );
}
