import { rest, RestHandler } from "msw";
import { findMockUserInDB } from "../database/user";

/* 
const login: RestHandler = rest.post(
  "/login",
  respondIf(validIfRequestIs({ method: "POST", body: { code: "test" } }))(
    (req) => findMockUserInDB(req.body.code),
  ),
);
*/

/*
const seeUser: RestHandler = rest.get(
  "/user/:user_id",
  respondIf(isRequest({ method: "GET" }))(),
);*/

const userHandler: RestHandler[] = [];

export default userHandler;
