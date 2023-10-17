import { create } from "zustand";
import { Wonder } from "../../entity/wonder";

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
type NewWonderStore = AdaptedWonder | null;

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

export const useNewWonderStore = create<NewWonderStore>()(
  (set) => null,
  /*
  {
  ...adaptWonder({
    id: 0,
    creator: {
      owner: {
        id: "",
        name: "",
        profileImage: { src: "", altText: "" },
      },
      id: 0,
      name: "",
      profileImage: { src: "", altText: "" },
    },
    dateInformation: {
      createdAt: "",
      updatedAt: "",
    },
    title: "",
    tags: [],
    summary: "",
    content: "",
    schedule: "",
    location: "",
    reservationProcess: null,
  }),
  }
   */
);

export const setNewStore = (state: Partial<AdaptedWonder>) => {
  useNewWonderStore.setState(state);
};

export const updateNewWonderStore = (
  propertyName: keyof NewWonderStore,
  value: AdaptedWonder[typeof propertyName],
) => {
  useNewWonderStore.setState({ [propertyName]: value });
};
