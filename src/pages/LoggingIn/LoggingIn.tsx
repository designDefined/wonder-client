import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { naverLogin, register } from "../../store/account/myAccountAPI";
import { useMyAccountStore } from "../../store/account/useMyAccountStore";
import styles from "./LoggingIn.module.scss";

type Props = {
  provider: "naver" | "kakao";
};

export default function LoggingIn({ provider }: Props) {
  const [params] = useSearchParams();
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const setUser = useMyAccountStore((state) => state.actions.setUser);
  const data = useMyAccountStore((state) => state.data);

  useEffect(() => {
    const code = params.get("code");
    naverLogin(code ?? "error")
      .then((res) => {
        if (res) {
          if (res.needRegister) {
            setUser({ ...res.user, id: res.user.platformId });
            setShowForm(true);
          } else {
            setUser({ ...res.user, id: res.user.platformId });
            navigate("/");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main className={styles.LoggingIn}>
      <h1 className={styles.title}>원더에 가입하신 걸 환영해요! 🎉</h1>
      <div className={styles.description}>
        본격적으로 이벤트를 구경하기 전,
        <br /> 실명과 전화번호를 적어주세요.
        <br /> 이벤트 예매나 예약 시 필요해요!
      </div>
      <div className={styles.field}>
        <h2 className={styles.label}>이름</h2>
        <input
          className={styles.input}
          placeholder="30자 이내로 작성해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <h2 className={styles.label}>전화번호</h2>
        <input
          className={styles.input}
          placeholder="30자 이내로 작성해주세요."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button
        className={styles.registerButton}
        onClick={() => {
          register(data?.id ?? "null", name, phoneNumber).then(
            (res) => {
              if (res) {
                setUser({ ...res.user, id: res.user.platformId });
                navigate("/");
              }
            },
            (err) => {
              console.log(err);
            },
          );
        }}
      >
        완료!
      </button>
    </main>
  );
}
