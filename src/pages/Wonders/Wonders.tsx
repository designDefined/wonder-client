import styles from "./Wonders.module.scss";
import api from "../../api";
import DefaultHeader from "../../components/headers/DefaultHeader/DefaultHeader";
import useFetch from "../../libs/ReactAssistant/useFetch";
import { WonderSearchCard } from "../../types/wonder/wonderCardDisplay";
import Chip from "../../components/common/Chip/Chip";
import { navigate } from "../../libs/Codex";
import { useState } from "react";

export default function Wonders() {
  const [wonders] = useFetch<WonderSearchCard[]>(
    () => api.get("/wonder/all"),
    [],
  );
  const [filter, setFilter] = useState<string[]>([]);
  if (!wonders) {
    return <DefaultHeader />;
  }

  return (
    <>
      <DefaultHeader />
      <main className={styles.Wonders}>
        <div className={styles.filters}>
          {filter.length > 0
            ? filter.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  attribute={{ theme: "default" }}
                  onClick={() => setFilter([])}
                />
              ))
            : ["과제전", "전시회", "#공연", "#체육대회"].map((value) => (
                <Chip
                  key={value}
                  label={value}
                  attribute={{ theme: "gray" }}
                  onClick={() => setFilter([value])}
                />
              ))}
        </div>
        <div className={styles.container}>
          {wonders
            .reverse()
            .filter(
              (wonder) =>
                filter.length === 0 ||
                wonder.tags.filter((tag) => filter.includes(tag.value)).length >
                  0,
            )
            .map((wonder) => (
              <div key={wonder.id} className={styles.searchCard}>
                <div
                  className={styles.thumbnail}
                  onClick={() => navigate(`/view/${wonder.id}`, "slideNext")}
                >
                  <img
                    src={wonder.thumbnail.src}
                    alt={wonder.thumbnail.altText}
                  />
                </div>
                <div
                  className={styles.creator}
                  onClick={() =>
                    navigate(`/creator/${wonder.creator.id}`, "slideNext")
                  }
                >
                  <div className={styles.profile}>
                    <img src={wonder.creator.profileImage.src} />
                  </div>
                  <div
                    className={styles.name}
                    onClick={() => navigate(`/view/${wonder.id}`, "slideNext")}
                  >
                    {wonder.creator.name}
                  </div>
                </div>
                <div className={styles.title}>{wonder.title}</div>
                <div className={styles.tags}>
                  {wonder.tags
                    .filter((tag) => tag.isPrimary)
                    .map((tag) => (
                      <Chip
                        key={tag.value}
                        label={tag.value}
                        attribute={{ theme: "default" }}
                        onClick={() => setFilter([tag.value])}
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
