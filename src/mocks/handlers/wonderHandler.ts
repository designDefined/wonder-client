import { rest, RestHandler } from "msw";
import { justValid, pass, respondIf } from "./utility";
import { getRecentWonderCardDisplay } from "../database/wonder";

const getRecentWonderCard: RestHandler = rest.get(
  "/wonderCard",
  respondIf(justValid)((req) => getRecentWonderCardDisplay(5)),
);

export const wonderHandler: RestHandler[] = [getRecentWonderCard];
