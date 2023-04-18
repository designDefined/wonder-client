import styles from "./Dev.module.scss";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import { useState } from "react";

export default function Dev() {
  const [text, setText] = useState("");
  return (
    <div className={styles.Dev}>
      <h1>개발 페이지</h1>

      <TextInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeHolder="플레이스홀더"
      />
      <button
        onClick={async () => {
          try {
            const response = await fetch("http://localhost:8000/echo", {
              method: "POST",
              mode: "cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ data: "sample" }),
            });
            const parsed = await response.json();
            console.log(parsed);
          } catch (e) {}
        }}
      >
        핑
      </button>
    </div>
  );
}
