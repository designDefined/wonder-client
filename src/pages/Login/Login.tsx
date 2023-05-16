import styles from "./Login.module.scss";
import kakao_icon from "../../assets/icon/kakao_icon.png";
import naver_icon from "../../assets/icon/naver_icon.png";
import google_icon from "../../assets/icon/google_icon.png";
import back_icon from "../../assets/icon/arrow_back.svg";
import { navigate } from "../../libs/Codex";

export default function Login() {
  return (
    <main className={styles.Login}>
      <div className={styles.header}>
        <h2>Login</h2>
        <button
          className={styles.backButton}
          onClick={() => {
            navigate("/", "slidePrevious");
          }}
        >
          <img src={back_icon} />
        </button>
      </div>

      <div className={styles.illustration}>
        일러스트 이미지 하나 들어감...
        <br />
        비워주세엿
      </div>
      <div className={styles.loginButtons}>
        <button className={styles.kakaoLogin}>
          <img src={kakao_icon} />
          <div>카카오 계정으로 로그인하기</div>
        </button>
        <button
          className={styles.naverLogin}
          onClick={() => {
            const url =
              "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=ea1D05CBMzfotDOECOFw&state=naver&redirect_uri=http://localhost:5173/naver";
            location.href = url;
          }}
        >
          <img src={naver_icon} />
          <div>네이버 계정으로 로그인하기</div>
        </button>
        <button className={styles.googleLogin}>
          <img src={google_icon} />
          <div>구글 계정으로 로그인하기</div>
        </button>
      </div>
    </main>
  );
}
