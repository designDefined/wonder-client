import styles from "./CreatorPage.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import { StoredImage } from "../../entity/utility/utility";
import api, { authedApi } from "../../api";
import { navigate, useParams } from "../../libs/Codex";
import { useEffect, useState } from "react";
import { CreatorDetail } from "../../types/creator/creatorDetail";
import useFetch from "../../libs/ReactAssistant/useFetch";
import CreatorInformation from "../../components/Creator/CreatorInformation";
import { WonderSummaryTitleOnly } from "../../types/wonder/WonderSummary";
import { useAccount } from "../../store/account/useAccount";
import { saveCreatorToken } from "../../libs/AutoLogin/autoLogin";

const cx = classNames.bind(styles);

export default function CreatorPage() {
  const creatorId = useParams()?.creator_id;
  const [creator] = useFetch<CreatorDetail>(
    () => authedApi.get(`/creator/${creatorId ?? "-1"}`),
    [],
  );
  const [wonders] = useFetch<WonderSummaryTitleOnly[]>(
    () => authedApi.get(`/creator/${creatorId ?? "-1"}/wonders`),
    [],
  );

  /* 
  const [wonders] = useFetch<CreatorDetail>(
    () => authedApi.get(`/creator/${creatorId ?? "-1"}`),
    [],
  );
*/

  if (!creator || wonders === null) {
    return <div />;
  }

  return (
    <div className={cx("CreatorPage")}>
      <DefaultHeader />
      <CreatorInformation detail={creator} />
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
        {creator.isMine && (
          <button
            className={cx("addEvent")}
            onClick={() => {
              saveCreatorToken(creator.id);
              navigate("/new/wonder", "slideNext");
            }}
          >
            이벤트 추가하기 +
          </button>
        )}
      </div>
    </div>
  );
}
