import { WonderCard, WonderCardOnlyThumbnail } from "./wonderCardDisplay";

export type Curation = {
  type: "wonder" | "wonderThumbnail" | "creator";
  title: string;
  to: string;
} & (
  | {
      type: "wonder";
      data: WonderCard[];
    }
  | {
      type: "wonderThumbnail";
      data: WonderCardOnlyThumbnail[];
    }
  | {
      type: "creator";
      data: [];
    }
);
