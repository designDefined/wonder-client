import { rest, RestHandler } from "msw";
import userHandler from "./handlers/userHandler";
import { pass } from "./handlers/utility";
import { wonderHandler } from "./handlers/wonderHandler";

export const handlers: RestHandler[] = [
  ...userHandler,
  ...wonderHandler,
  rest.get("/ping", pass),
];
