import styles from "./Dev.module.scss";
import TextInput from "../../../components/inputs/TextInput/TextInput";
import { useState } from "react";
import { useMyAccountStore } from "../../../store/account/useMyAccountStore";
import { useSampleAction, useSampleStore } from "../../../tools/utils/store";

export default function Dev() {
  const data = useSampleStore((state) => state.data);
  const editable = useSampleStore((state) => state.editable);

  const { setSample, toggleEditable } = useSampleAction();

  //  const { status, data, login, logout } = useMyAccountStore((state) => state);

  return (
    <div className={styles.Dev}>
      <h1>개발 페이지</h1>

      <TextInput
        value={data}
        onChange={(e) => setSample(e.target.value)}
        placeHolder="플레이스홀더"
      />
      <button
        onClick={() => {
          toggleEditable();
        }}
      >
        핑
      </button>
      <div>{editable ? "수정 가능" : "불가능"}</div>
    </div>
  );
}
