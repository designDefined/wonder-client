import styles from "./Login.module.scss";
import kakao_icon from "../components/assets/kakao_icon.png";
import naver_icon from "../components/assets/naver_icon.png";
import google_icon from "../components/assets/google_icon.png";

export default function Login() {
  return (
    <main className={styles.Login}>
      <h1 className={styles.title}> SNS 계정으로 간단하게 로그인하기</h1>
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
        <button className={styles.naverLogin}>
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
