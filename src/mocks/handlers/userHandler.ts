import { rest, RestHandler } from "msw";
import { pipe } from "ramda";
import { findMockUserInDB, findSampleUser } from "../database/user";
import { justValid, validIfRequestIs, respond, respondIf } from "./utility";

const login: RestHandler = rest.post(
  "/login",
  respondIf(validIfRequestIs({ method: "POST", body: { code: "test" } }))(
    (req) => findMockUserInDB("test"),
  ),
);

/*
const seeUser: RestHandler = rest.get(
  "/user/:user_id",
  respondIf(isRequest({ method: "GET" }))(),
);*/

const userHandler: RestHandler[] = [login];

export default userHandler;
