import styles from "./TicketBook.module.scss";
import classNames from "classnames/bind";
import MyPageSubHeader from "../../../components/MyPage/MyPageSubHeader/MyPageSubHeader";
import { useQuery } from "@tanstack/react-query";
import { getMeDetail } from "../../../api/user";

const cx = classNames.bind(styles);

export default function TicketBook() {
  const { isLoading, error, data } = useQuery(getMeDetail);

  return (
    <div className={cx("TicketBook")}>
      <MyPageSubHeader title="내 티켓북" />
      
    </div>
  );
}
