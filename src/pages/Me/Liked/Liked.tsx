import styles from "./Liked.module.scss";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import MyPageSubHeader from "../../../components/MyPage/MyPageSubHeader/MyPageSubHeader";

import Card from "../../../components/Card/Card";
import { getMeDetail } from "../../../api/user";
import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Liked() {
  const { data } = useQuery(getMeDetail);

  return (
    <>
      <DefaultHeader />
      <MyPageSubHeader title="좋아요 한 이벤트" />
      <div className={cx("Liked")}>
        <div className={cx("container")}>
          {data?.likedWonders &&
            data.likedWonders.map((wonder) => (
              <Card.Vertical
                key={wonder.id}
                className={cx("item")}
                wonder={wonder}
                liked
              />
            ))}
        </div>
      </div>
    </>
  );
}
