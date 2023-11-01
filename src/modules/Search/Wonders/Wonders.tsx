import { useQuery } from "@tanstack/react-query";
import classNames from "classnames/bind";
import { stringify } from "qs";
import { getWonderList } from "../../../api/wonder";
import Card from "../../../components/Card/Card";
import styles from "./Wonders.module.scss";

const cx = classNames.bind(styles);

type WondersProps = {
  query: Record<string, unknown>;
};

export default function Wonders({ query }: WondersProps) {
  const { isLoading, data } = useQuery(
    getWonderList(query, "search" + stringify(query)),
  );

  if (isLoading) {
    return (
      <div className={cx("Wonders")}>
        <h2 className={cx("title")}>검색</h2>
        <div>검색 중...</div>
      </div>
    );
  }

  return (
    <div className={cx("Wonders")}>
      <h2 className={cx("title")}>검색</h2>
      <div className={cx("bar")}>
        <div className={cx("status")}>
          {query.status
            ? query.status === "now"
              ? "진행 중"
              : "예약 중"
            : "전체"}
        </div>
        <div className={cx("sort")}>최근 등록된 순</div>
      </div>
      <div className={cx("wonderList")}>
        {data && data.length > 0 ? (
          data.map((wonder) => (
            <Card.Searched
              key={wonder.id}
              wonder={wonder}
              className={cx("card")}
            />
          ))
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </div>
    </div>
  );
}
