import { rest, RestHandler } from "msw";
import { justValid, pass, respondIf } from "./utility";
import {
  findMockWonderInDB,
  getRecentWonderCardDisplay,
  createNewWonder,
} from "../database/wonder";
import { NewWonder } from "../../types/wonder/newWonder";

const getRecentWonderCard: RestHandler = rest.get(
  "/wonderCard",
  respondIf(justValid)((req) => getRecentWonderCardDisplay(5)),
);

const getWonderById: RestHandler = rest.get(
  "/wonder/:wonder_id",
  respondIf(justValid)((req) =>
    findMockWonderInDB(Number(req.params.wonder_id)),
  ),
);

const createWonder: RestHandler = rest.post(
  "/wonder",
  respondIf(justValid)((req) => createNewWonder(req.body as NewWonder)),
);

export const wonderHandler: RestHandler[] = [
  getRecentWonderCard,
  getWonderById,
  createWonder,
];
