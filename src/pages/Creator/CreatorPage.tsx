import styles from "./CreatorPage.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import { useFetch, useJSONFetch } from "../../libs/Admon";
import { StoredImage } from "../../entity/utility/utility";
import api from "../../api";
import { navigate, useParams } from "../../libs/Codex";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

export default function CreatorPage() {
  const creatorId = useParams()?.creator_id;

  const [creator, setCreator] = useState<{
    id: number;
    name: string;
    summary: string;
  }>();
  const [wonders, setWonders] = useState<
    {
      id: number;
      title: string;
      thumbnail: StoredImage;
    }[]
  >();

  useEffect(() => {
    api
      .get<{
        creator: { id: number; name: string; summary: string };
        wonders: { id: number; title: string; thumbnail: StoredImage }[];
      }>(`/creator/${creatorId ?? "-1"}`)
      .then((res) => {
        setCreator(res.creator);
        setWonders(res.wonders);
      });
  }, []);

  return (
    <div className={cx("CreatorPage")}>
      <DefaultHeader />
      <div className={cx("my")}>
        <div className={cx("name")}>{creator && creator.name}</div>
        <div className={cx("summary")}>{creator && creator.summary}</div>
      </div>
      <div className={cx("events")}>
        <div className={cx("title")}>나의 이벤트</div>
        {wonders &&
          wonders.map((wonder) => (
            <div
              className={cx("wonder")}
              key={wonder.id}
              onClick={() => navigate(`/view/${wonder.id}`)}
            >
              {wonder.title}
            </div>
          ))}
        <button
          className={cx("addEvent")}
          onClick={() => navigate("/new/wonder", "slideNext")}
        >
          이벤트 추가하기 +
        </button>
      </div>
    </div>
  );
}
