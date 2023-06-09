import styles from "./Tags.module.scss";
import { maybe, Maybe } from "../../../libs/Admon/maybe";
import { Wonder } from "../../../entity/wonder/wonder";
import Chip from "../../common/Chip/Chip";

export default function Tags({ tags }: { tags: Maybe<Wonder["tags"]> }) {
  return (
    <ul className={styles.Tags}>
      {maybe.isNothing(tags)
        ? [0, 1, 2].map(() => <li />)
        : maybe.read(tags).map((tag, index) => (
            <li key={index}>
              <Chip
                label={tag.value}
                attribute={{ theme: tag.isPrimary ? "default" : "gray" }}
                onClick={() => null}
              />
            </li>
          ))}
    </ul>
  );
}
