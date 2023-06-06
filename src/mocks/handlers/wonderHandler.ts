import { rest, RestHandler } from "msw";

const getRecentWonderCard: RestHandler = rest.get("/ping", () => {});

export const wonderHandler: RestHandler[] = [getRecentWonderCard];
