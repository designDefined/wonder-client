export type WonderId = number | null;
export type WonderTitle = string;
export type WonderTag = string;
export type WonderSummary = string;
export type WonderContent = string;
export type WonderSchedule = string;
export type WonderLocation = string;
export type WonderReservationProcess = null;

export type Wonder = {
  id: WonderId;
  title: WonderTitle;
  tags: WonderTag[];
  summary: WonderSummary;
  content: WonderContent;
  schedule: WonderSchedule;
  location: WonderLocation;
  reservationProcess: WonderReservationProcess;
};

export const initialWonder: Wonder = {
  id: null,
  title: "",
  tags: [],
  summary: "",
  content: "",
  schedule: "",
  location: "",
  reservationProcess: null,
};
