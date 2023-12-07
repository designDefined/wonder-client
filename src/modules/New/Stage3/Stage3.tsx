import classNames from "classnames/bind";
import { useState } from "react";
import { NewWonderInput } from "../../../pages/new/NewWonder/NewWonderPage";
import styles from "./Stage3.module.scss";

const cx = classNames.bind(styles);

const times: { h: number; m: number }[] = [];
for (let h = 9; h < 24; h++) {
  times.push({ h, m: 0 });
  times.push({ h, m: 30 });
}

type Data = Pick<
  NewWonderInput,
  "isReservationRequired" | "reservationProcess"
>;
export default function Stage3({
  data,
  setter,
}: {
  data: Data;
  setter: (data: Partial<Data>) => void;
}) {
  const [inputs, setInputs] = useState({
    date: new Date(),
    endsAt: new Date(),
    amount: 0,
    phone: false,
    email: false,
  });

  return (
    <div className={cx("Stage3")}>
      <div className={cx("")}>
        <div>예약 시작 시간</div>
        {/* <button>{}</button> */}
        {/* <select></select> */}
      </div>
    </div>
  );
}
