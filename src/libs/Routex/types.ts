import { ReactNode } from "react";

export type RoutexType = {
  component: ReactNode;
  path: string;
  params?: Record<string, string | number>;
  isIndex?: boolean;
};
