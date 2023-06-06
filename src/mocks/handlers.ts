import { rest, RestHandler } from "msw";
import userHandler from "./handlers/userHandler";
import { pass } from "./handlers/utility";

export const handlers: RestHandler[] = [
  ...userHandler,
  rest.get("/ping", pass),
];
