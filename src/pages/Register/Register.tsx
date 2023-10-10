import Button from "../../components/common/Button/Button";
import TextInput from "../../components/common/TextInput/TextInput";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import useEnhancedState from "../../libs/ReactAssistant/useEnhancedState";
import {
  isValidRegisterEmail,
  isValidRegisterName,
  isValidRegisterPhoneNumber,
} from "../../libs/validator";
import { registerUser, useAccount } from "../../store/account/useAccount";
import { UserRegisterForm } from "../../types/user/userAuthorization";
import styles from "./Register.module.scss";
export default function Register() {
  const preparedEmail = useAccount((state) => state.registerEmail);
  const [registerForm, , setRegisterFormValue] =
    useEnhancedState<UserRegisterForm>({
      email: preparedEmail ?? "",
      name: "",
      phoneNumber: "",
    });

  return (
    <>
      <DefaultHeader />
      <main className={styles.Register}>
        <h1 className={styles.title}>가입 완료까지 한 발자국! 👣</h1>
        <div className={styles.description}>
          본격적으로 이벤트를 구경하기 전,
          <br /> 실명과 전화번호를 적어주세요.
          <br /> 이벤트 예매나 예약 시 필요해요!
        </div>
        <div className={styles.forms}>
          <TextInput
            title="이메일"
            placeholder=""
            value={registerForm.email}
            onChange={(e) => setRegisterFormValue("email", e.target.value)}
            isDisabled={true}
          />
          <TextInput
            title="이름"
            placeholder="ex. 장원영"
            value={registerForm.name}
            onChange={(e) => setRegisterFormValue("name", e.target.value)}
            maxLength={30}
          />
          <TextInput
            title="전화번호"
            placeholder="ex. 010-1234-9678"
            value={registerForm.phoneNumber}
            onChange={(e) =>
              setRegisterFormValue("phoneNumber", e.target.value)
            }
            maxLength={30}
          />
        </div>
        <Button
          label="완료!"
          attribute={{ size: "big", theme: "default" }}
          onClick={() => {
            if (
              isValidRegisterEmail(registerForm.email) &&
              isValidRegisterName(registerForm.name) &&
              isValidRegisterPhoneNumber(registerForm.phoneNumber)
            ) {
              void registerUser(registerForm);
            } else {
              alert("회원가입 정보가 올바르지 않습니다.");
            }
          }}
        />
      </main>
    </>
  );
}
