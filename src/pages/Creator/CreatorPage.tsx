import styles from "./CreatorPage.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import { useParams } from "../../libs/Codex";

import { useQuery } from "@tanstack/react-query";
import { getCreator } from "../../api/creator";
import Introduction from "../../modules/Creator/Introduction/Introduction";
import CreatedWonderList from "../../modules/Creator/CreatedWonderList/CreatedWonderList";

const cx = classNames.bind(styles);

export default function CreatorPage() {
  const creatorId = useParams()?.creator_id;
  const { data: creator } = useQuery({
    ...getCreator(creatorId ? Number(creatorId) : -1),
  });

  if (!creator) {
    return <div />;
  }

  return (
    <div className={cx("CreatorPage")}>
      <DefaultHeader />
      <Introduction
        id={creator.id}
        name={creator.name}
        summary={creator.summary}
        isMine={creator.isMine}
        profileImage={creator.profileImage}
      />
      <CreatedWonderList createdWonder={creator.createdWonder} />
    </div>
  );
}
