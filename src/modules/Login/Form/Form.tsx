import styles from "./Form.module.scss";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import classNames from "classnames/bind";
import { navigate } from "../../../libs/Codex";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postUserLogin } from "../../../api/user";
import { saveToken } from "../../../functions/storage/token";
import { saveRegisterInformation } from "../../../functions/storage/registerInformation";

const cx = classNames.bind(styles);

export default function Form() {
  const queryClient = useQueryClient();
  const [email, setEmail] = useState("");
  const { mutate } = useMutation({
    ...postUserLogin("test"),
    onSuccess: (response) => {
      if (response.needLogin) {
        const { email, type } = response;
        saveRegisterInformation({ email, type });
        navigate("/register", "slideNext");
      } else {
        const { token } = response;
        saveToken(token);
        void queryClient.invalidateQueries(["user"]);
        navigate("/", "slidePrevious");
      }
    },
  });

  return (
    <form
      className={cx("Form")}
      onSubmit={(e) => {
        e.preventDefault();
        mutate({ email });
      }}
    >
      <h2 className={cx("title")}>이메일 주소를 입력하세요</h2>
      <Input.Text
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onValidateError={(value) =>
          value.includes("@") ? null : "올바른 이메일을 입력하세요"
        }
        placeholder="이메일을 입력하세요"
        isHintAvailable
      />
      <Button.Submit name="로그인" isFullWidth isMainColored />
    </form>
  );
}
