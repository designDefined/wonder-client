import { useParams } from "../../libs/Codex";
import { Wonder } from "../../entity/wonder/wonder";
import api from "../../api";
import { useJSONFetch } from "../../libs/Admon";
import { useEffect } from "react";
import { keysOfWonder } from "../../entity/emptyEntity";

export default function View() {
  const wonderId = useParams()?.wonder_id;
  const wonderData = useJSONFetch<Wonder>(
    api.get<Wonder>(`/wonder/${wonderId ?? "error"}`),
    keysOfWonder,
    [wonderId],
  );

  useEffect(() => {
    console.log(wonderData.read);
  }, [wonderData.read]);

  return (
    <main>
      {wonderData.read.title._state === "Just"
        ? wonderData.read.title._value
        : "asd"}
    </main>
  );
}
