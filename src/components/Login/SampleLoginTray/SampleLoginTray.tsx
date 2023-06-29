import styles from "./SampleLoginTray.module.scss";
import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";
import { useState } from "react";
import api from "../../../api";
import { User } from "../../../entity/user/user";
import { saveAutoLogin } from "../../../libs/AutoLogin/autoLogin";
import { useMyAccountStore } from "../../../store/account/useMyAccountStore";
import { navigate } from "../../../libs/Codex";

export default function SampleLoginTray() {
  const [email, setEmail] = useState("");
  const { login } = useMyAccountStore((state) => state.actions);

  return (
    <div className={styles.sampleLoginTray}>
      <div className={styles.email}>이메일 주소를 입력하세요</div>
      <TextInput
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder={"예) 나의메일주소@naver.com"}
      />
      <Button
        label={"확인"}
        attribute={{ size: "big", theme: "default" }}
        onClick={() => {
          api
            .post<User>("/user/login", { code: email })
            .then((res) => {
              const { id: token } = res;
              saveAutoLogin("user", token);
              login(res);
              navigate("/", "slidePrevious");
            })
            .catch(async (e) => console.log(await e));
        }}
      />
    </div>
  );
}
