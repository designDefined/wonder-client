import styles from "./SampleLoginTray.module.scss";
import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";
import { useState } from "react";

import { testLoginUser } from "../../../store/account/useAccount";
import { isValidRegisterEmail } from "../../../libs/validator";

export default function SampleLoginTray() {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.sampleLoginTray}>
      <div className={styles.email}>이메일 주소를 입력하세요</div>
      <TextInput
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder={"예) 나의메일주소@naver.com"}
        maxLength={30}
      />
      <Button
        label={"확인"}
        attribute={{ size: "big", theme: "default" }}
        onClick={() => {
          if (isValidRegisterEmail(email)) {
            void testLoginUser(email);
          } else {
            alert("이메일 형식이 올바르지 않습니다.");
          }
        }}
      />
    </div>
  );
}
