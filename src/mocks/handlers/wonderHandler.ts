import { rest, RestHandler } from "msw";
import { justValid, pass, respondIf } from "./utility";
import {
  findMockWonderInDB,
  getRecentWonderCardDisplay,
} from "../database/wonder";

const getRecentWonderCard: RestHandler = rest.get(
  "/wonderCard",
  respondIf(justValid)((req) => getRecentWonderCardDisplay(5)),
);

const getWonderById: RestHandler = rest.get(
  "/wonder/:wonder_id",
  respondIf(justValid)((req) => findMockWonderInDB(1)),
);

export const wonderHandler: RestHandler[] = [
  getRecentWonderCard,
  getWonderById,
];
