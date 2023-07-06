import { RestHandler } from "msw";
import userHandler from "./handlers/userHandler";

import { wonderHandler } from "./handlers/wonderHandler";

/* 
import { pass } from "./handlers/utility";
*/
export const handlers: RestHandler[] = [
  ...userHandler,
  ...wonderHandler,
  /*rest.get("/ping", pass),*/
];
