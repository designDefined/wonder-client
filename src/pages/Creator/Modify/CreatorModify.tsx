import styles from "./CreatorModify.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../../components/headers/DefaultHeader/DefaultHeader";
import { navigate, useParams } from "../../../libs/Codex";
import Input from "../../../components/Input/Input";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCreator, putCreator } from "../../../api/creator";
import Button from "../../../components/Button/Button";

const cx = classNames.bind(styles);

export default function CreatorModify() {
  const creatorId = useParams()?.creator_id;
  const queryClient = useQueryClient();
  const { data: creator } = useQuery({
    ...getCreator(creatorId ? Number(creatorId) : -1),
  });
  const { mutate } = useMutation({
    ...putCreator(creatorId ? Number(creatorId) : -1),
    onSuccess: () => queryClient.invalidateQueries(["creator"]),
  });
  const [name, setName] = useState(creator?.name ?? "");
  const [summary, setSummary] = useState(creator?.summary ?? "");

  useEffect(() => {
    if (creator && !name && !summary) {
      setName(creator.name);
      setSummary(creator.summary);
    }
  }, [creator]);

  if (!creator) {
    return <div />;
  }

  return (
    <>
      <DefaultHeader />
      <main className={cx("CreatorModify")}>
        <div className={cx("toPrevious")}>
          <img
            src={"/assets/icon/arrow_back.svg"}
            onClick={() =>
              navigate(`/creator/${creatorId ?? -1}`, "slidePrevious")
            }
          />
          <div>프로필 수정</div>
        </div>
        <div className={cx("profileArea")}>
          <div>
            <img
              className={cx("profileImg")}
              src={creator.profileImage.src}
              alt={creator.profileImage.altText}
            />
          </div>
        </div>
        <Input.Text
          title="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={15}
          isHintAvailable
        />
        <Input.Text
          title="한 줄 소개"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          maxLength={30}
          isHintAvailable
        />
        <Button
          isFullWidth
          isMainColored
          isDisabled={name === creator.name && summary === creator.summary}
          onClick={() => {
            mutate({
              name: name.length > 0 ? name : undefined,
              summary: summary.length > 0 ? summary : undefined,
            });
          }}
        >
          저장하기
        </Button>
      </main>
    </>
  );
}
