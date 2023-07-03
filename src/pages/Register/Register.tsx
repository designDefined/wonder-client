import Button from "../../components/common/Button/Button";
import TextInput from "../../components/common/TextInput/TextInput";
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
  const [registerForm, setRegisterForm, setRegisterFormValue] =
    useEnhancedState<UserRegisterForm>({
      email: preparedEmail ?? "",
      name: "",
      phoneNumber: "",
    });

  return (
    <main className={styles.Register}>
      <h1 className={styles.title}>가입 완료까지 한 발자국! 👣</h1>
      <div className={styles.description}>
        본격적으로 이벤트를 구경하기 전,
        <br /> 실명과 전화번호를 적어주세요.
        <br /> 이벤트 예매나 예약 시 필요해요!
      </div>
      <div className={styles.forms}>
        {!preparedEmail && (
          <TextInput
            title="이메일"
            placeholder=""
            value={registerForm.email}
            onChange={(e) => setRegisterFormValue("email", e.target.value)}
          />
        )}
        <TextInput
          title="이름"
          placeholder="30자 이내로 작성해주세요."
          value={registerForm.name}
          onChange={(e) => setRegisterFormValue("name", e.target.value)}
        />
        <TextInput
          title="전화번호"
          placeholder="30자 이내로 작성해주세요."
          value={registerForm.phoneNumber}
          onChange={(e) => setRegisterFormValue("phoneNumber", e.target.value)}
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
  );
}
