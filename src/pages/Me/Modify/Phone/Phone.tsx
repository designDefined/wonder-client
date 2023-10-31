import styles from "./Phone.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../../../components/headers/DefaultHeader/DefaultHeader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMeDetail, putMePhone } from "../../../../api/user";
import { navigate } from "../../../../libs/Codex";
import Input from "../../../../components/Input/Input";
import { useState } from "react";
import Button from "../../../../components/Button/Button";

const cx = classNames.bind(styles);

export default function Phone() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(getMeDetail);
  const { mutate } = useMutation({
    ...putMePhone,
    onSuccess: () => queryClient.invalidateQueries(["user", "me"]),
  });
  const [phoneNumber, setPhoneNumber] = useState<string>(
    data?.phoneNumber ?? "",
  );

  if (isLoading || error || !data)
    return <div>{isLoading ? "로딩 중" : "에러"}</div>;

  return (
    <>
      <DefaultHeader />
      <main className={cx("Phone")}>
        <div className={cx("toPrevious")}>
          <img
            src={"/assets/icon/arrow_back.svg"}
            onClick={() => navigate("/me/modify", "slidePrevious")}
          />
          <div>휴대폰 번호</div>
        </div>
        <Input.Text
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button
          isFullWidth
          isMainColored
          onClick={() => mutate({ phoneNumber })}
          isDisabled={data.phoneNumber === phoneNumber}
        >
          저장하기
        </Button>
      </main>
    </>
  );
}
