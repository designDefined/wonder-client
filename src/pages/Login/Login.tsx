import styles from "./Login.module.scss";
import kakao_icon from "/assets/icon/kakao_icon.png";
import naver_icon from "/assets/icon/naver_icon.png";
import google_icon from "/assets/icon/google_icon.png";

import { openTray } from "../../libs/Tray/useTray";

import SampleLoginTray from "../../components/Login/SampleLoginTray/SampleLoginTray";
import LoginHeader from "../../components/headers/LoginHeader/LoginHeader";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Login() {
  return (
    <main className={cx("Login")}>
      <LoginHeader />
      <h2 className={cx("title")}>SNS 계정으로 간편 로그인</h2>
      <div className={cx("buttons")}>
        <button
          className={cx("kakaoLogin")}
          onClick={() => {
            /*
            api
              .post<UserSummary>("/user/login", { code: "test" })
              .then((res) => {
                console.log(res);
                login(res);
                navigate("/", "slidePrevious");
              })
              .catch(async (err) => console.log(await err));
               */
            openTray(() => <SampleLoginTray />);
          }}
        >
          <img src={kakao_icon} alt="kakao icon" />
          <div>카카오 계정으로 로그인하기</div>
        </button>
        <button
          className={cx("naverLogin")}
          onClick={() => {
            const url =
              "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=ea1D05CBMzfotDOECOFw&state=naver&redirect_uri=http://localhost:5173/naver";
            location.href = url;
          }}
        >
          <img src={naver_icon} alt="naver icon" />
          <div>네이버 계정으로 로그인하기</div>
        </button>
        <button
          className={cx("googleLogin")}
          onClick={() => {
            const url =
              "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=ea1D05CBMzfotDOECOFw&state=naver&redirect_uri=http://localhost:5173/naver";
            location.href = url;
          }}
        >
          <img src={google_icon} alt="google icon" />
          <div> 구글 계정으로 로그인하기</div>
        </button>
        <button
          className={cx("googleLogin")}
          onClick={() => {
            openTray(() => <SampleLoginTray />);
          }}
        >
          <div>테스트 계정으로 로그인하기</div>
        </button>
      </div>
    </main>
  );
}
