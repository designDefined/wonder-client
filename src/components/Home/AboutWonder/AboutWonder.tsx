import styles from "./AboutWonder.module.scss";
import { navigate } from "../../../libs/Codex";

export default function AboutWonder() {
  return (
    <section className={styles.AboutWonder}>
      <h2 className={styles.title}>왜 &lsquo;원더&lsquo;일까요?</h2>
      <div className={styles.imageWrapper}>
        <img src={"/assets/illustration/about_wonder.png"} />
        <div>원더 장점 어필 타임</div>
        <button
          className={styles.toRegister}
          onClick={() => navigate("/login", "slideNext")}
        >
          회원가입 하러 가기
        </button>
      </div>
    </section>
  );
}
