import styles from "./Me.module.scss";
import classNames from "classnames/bind";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import Carousel from "../../components/Carousel/Carousel";
import { useQuery } from "@tanstack/react-query";
import { getMeDetail } from "../../api/user";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { navigate } from "../../libs/Codex";

const cx = classNames.bind(styles);

export default function Me() {
  const { isLoading, error, data } = useQuery(getMeDetail);

  if (isLoading || error || !data)
    return <div>{isLoading ? "로딩 중" : "에러"}</div>;

  return (
    <>
      <DefaultHeader />
      <main className={cx("Me")}>
        <div className={cx("profile")}>
          <div className={cx("detail")}>
            <img
              className={cx("profileImg")}
              src={data.profileImage.src}
              alt={data.profileImage.altText}
            />
            <div className={cx("information")}>
              <div className={cx("name")}>{data.name}</div>
              <div className={cx("email")}>{data.email}</div>
            </div>
          </div>
          <Button
            isMainColored={false}
            isFullWidth
            onClick={() => navigate("/me/modify")}
          >
            프로필 수정하기
          </Button>
        </div>

        <div className={cx("divider", "big")} />
        <div className={cx("section")}>
          <Title.Arrow title="예약 내역" onClick={"/me/reserved"} />
          {data.reservedWonders.slice(0, 3).map((reservation) => (
            <Card.Reserved
              key={reservation.id}
              wonder={reservation.wonder}
              reservation={reservation}
              isSimple
              isPassedReservation={false}
            />
          ))}
        </div>
        <div className={cx("divider")} />
        <Carousel.LikedVertical wonders={data.likedWonders}>
          <Title.Arrow title="좋아요" onClick={"/me/liked"} />
        </Carousel.LikedVertical>
        <div className={cx("divider")} />
        <div className={cx("section")}>
          <Title.Arrow title="내 티켓북" onClick={"/me/ticketBook"} />
          {data.ticketBook.slice(0, 3).map((reservation) => (
            <Card.Reserved
              key={reservation.id}
              wonder={reservation.wonder}
              reservation={reservation}
              isPassedReservation={false}
              isSimple={false}
            />
          ))}
        </div>
        <div className={cx("divider")} />

        <div className={cx("section")}>
          <Title.Plus title="크리에이터 계정" onClick="/new/creator" />
          <div className={cx("carousel")}>
            <div className={cx("slider")}>
              {data.ownedCreators.map((creator) => (
                <Card.Creator
                  key={creator.id}
                  creator={creator}
                  className={cx("sliderItem")}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
