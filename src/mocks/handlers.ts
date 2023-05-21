import { rest, RestHandler } from "msw";

export const handlers: RestHandler[] = [
  rest.get("/ping", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ success: true }));
  }),
];
