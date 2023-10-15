import { useMutation, useQueryClient } from "@tanstack/react-query";
import classNames from "classnames/bind";
import { postUserRegister } from "../../api/user";
import Button from "../../components/Button/Button";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import Input from "../../components/Input/Input";
import Progress from "../../components/Progress/Progress";
import { getRegisterInformation } from "../../functions/storage/registerInformation";
import { saveToken } from "../../functions/storage/token";
import { navigate } from "../../libs/Codex";
import useEnhancedState from "../../libs/ReactAssistant/useEnhancedState";
import {
  isValidRegisterEmail,
  isValidRegisterName,
  isValidRegisterPhoneNumber,
} from "../../libs/validator";
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

export default function Register() {
  const preparedInformation = getRegisterInformation();
  const [registerForm, , setRegisterFormValue] = useEnhancedState({
    name: "",
    phoneNumber: "",
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    ...postUserRegister,
    onSuccess: ({ token }) => {
      saveToken(token);
      void queryClient.invalidateQueries(["user"]);
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    },
  });

  if (!preparedInformation) {
    alert("이메일 정보가 없습니다.");
    navigate("/login", "slidePrevious");
    return <div />;
  }

  return (
    <>
      <DefaultHeader />
      <main className={cx("Register")}>
        <Progress steps={2} currentStep={2} />
        <h1 className={cx("title")}>가입 완료까지 한 발자국! 👣</h1>
        <div className={cx("description")}>
          W@NDER 시작 전 이름과 전화번호를 작성해주세요.
          <br />
          해당 정보는 이벤트 참여와 예약 시 활용됩니다.
        </div>
        <form
          className={cx("form")}
          onSubmit={(e) => {
            e.preventDefault();
            if (
              isValidRegisterEmail(preparedInformation.email) &&
              isValidRegisterName(registerForm.name) &&
              isValidRegisterPhoneNumber(registerForm.phoneNumber)
            ) {
              console.log("!");
              mutate({
                type: preparedInformation.type,
                data: { ...registerForm, email: preparedInformation.email },
              });
            } else {
              alert("회원가입 정보가 올바르지 않습니다.");
            }
          }}
        >
          <Input.Text
            title="이름"
            placeholder="ex. 홍길동"
            value={registerForm.name}
            onChange={(e) => setRegisterFormValue("name", e.target.value)}
            maxLength={30}
          />
          <Input.Text
            title="전화번호"
            placeholder="ex. 010-1234-9678"
            value={registerForm.phoneNumber}
            onChange={(e) =>
              setRegisterFormValue("phoneNumber", e.target.value)
            }
            maxLength={30}
          />
          <Button.Submit name="완료!" isFullWidth isMainColored />
        </form>
      </main>
    </>
  );
}
