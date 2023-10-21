import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import classNames from "classnames/bind";
import { getMe } from "../../../api/user";
import { postWonderLike } from "../../../api/wonder";
import { IconLike } from "../../../assets/wonder/like";
import Chip from "../../../components/Chip/Chip";
import { Wonder } from "../../../entity/wonder";
import { navigate } from "../../../libs/Codex";
import styles from "./Cover.module.scss";

const cx = classNames.bind(styles);

type CoverProps = {
  id: Wonder["id"];
  thumbnail: Wonder["thumbnail"];
  tag: Wonder["tag"];
  liked: boolean;
};

export default function Cover({ id, thumbnail, tag, liked }: CoverProps) {
  const { data: me } = useQuery(getMe);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    ...postWonderLike(id),
    onSuccess: () => queryClient.invalidateQueries(["wonder", "detail", id]),
  });

  return (
    <div className={cx("Cover")}>
      <div className={cx("thumbnailBackground")}>
        <img
          className={cx("thumbnail")}
          src={thumbnail.src}
          alt={thumbnail.altText}
        />
        <div className={cx("info")}>
          <div className={cx("tags")}>
            <Chip.Status status={tag.status} />
            <Chip.Genre genre={tag.genre} />
          </div>
          <div className={cx("buttons")}>
            <button
              onClick={() => {
                if (!me) {
                  alert("로그인이 필요합니다.");
                  navigate("/login", "slideNext");
                  return;
                }
                mutate(!liked);
              }}
            >
              <IconLike filled={liked} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
