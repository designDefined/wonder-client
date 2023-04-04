import { create } from "zustand";
import { initialWonder, Wonder } from "../../entity/wonder/wonder";

type Adapter<T extends Wonder> = {
  title: T["title"];
  tags: T["tags"];
  summary: T["title"];
  content: T["content"];
  schedule: T["schedule"];
  location: T["location"];
  reservationProcess: T["reservationProcess"];
};
type AdaptedWonder = Adapter<Wonder>;
type NewWonderStore = AdaptedWonder;

const adaptWonder = ({
  title,
  tags,
  summary,
  content,
  schedule,
  location,
  reservationProcess,
}: Wonder): AdaptedWonder => ({
  title,
  tags,
  summary,
  content,
  schedule,
  location,
  reservationProcess,
});

export const useNewWonderStore = create<NewWonderStore>()((set) => ({
  ...adaptWonder(initialWonder),
}));

export const setNewStore = (state: Partial<AdaptedWonder>) => {
  useNewWonderStore.setState(state);
};

export const updateNewWonderStore = (
  propertyName: keyof NewWonderStore,
  value: AdaptedWonder[typeof propertyName],
) => {
  useNewWonderStore.setState({ [propertyName]: value });
};
