import { andThen, equals, keys, pick, pipe } from "ramda";
import { ResponseComposition, RestContext, RestRequest } from "msw";

type MSWResponse = ReturnType<ResponseComposition>;

type MSWResolver = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => MSWResponse;
/*
type SimpleRequest = {
  method: string;
  params: Record<string, string | ReadonlyArray<string>>;
  body: any;
  isAuthorized: boolean;
};
type ValidatedRequest = SimpleRequest & {
  isValid: boolean;
  message: string;
};
type Result = {
  isSuccess: boolean;
  data: any;
};

type ParseRequest = (req: RestRequest) => Promise<SimpleRequest>;
type CheckAuthorization = (req: SimpleRequest) => Promise<SimpleRequest>;
type ValidateRequest = (req: SimpleRequest) => Promise<ValidatedRequest>;
type ResultGetter = (req: ValidatedRequest) => Promise<any>;
type PrepareResult = (
  getter: ResultGetter,
) => (req: ValidatedRequest) => Promise<Result>;
type Send = (
  res: ResponseComposition,
  ctx: RestContext,
) => (result: Result) => MSWResponse;

const parseRequest: ParseRequest = async (req) => {
  if (req.method === "GET") {
    return Promise.resolve({
      method: req.method,
      params: req.params,
      body: null,
      isAuthorized: false,
    });
  }
  const body = await req.json();
  return Promise.resolve({
    method: req.method,
    params: req.params,
    body,
    isAuthorized: false,
  });
};

const checkAuthorization: CheckAuthorization = (req) =>
  Promise.resolve({
    ...req,
    isAuthorized: true,
  });
const prepareResult: PrepareResult = (getter) => (req) =>
  getter(req)
    .then((res) => ({ isSuccess: true, data: res }))
    .catch((err) => ({ isSuccess: false, data: err }));

const send: Send = (res, ctx) => (result) =>
  result.isSuccess
    ? res(ctx.delay(), ctx.status(200), ctx.json(result.data))
    : res(ctx.delay(), ctx.status(500), ctx.json(result.data));

type RespondIf = (
  validateRequest: ValidateRequest,
) => (getter: ResultGetter) => MSWResolver;

export const respondIf: RespondIf =
  (validateRequest) => (getter) => (req, res, ctx) =>
    pipe(
      parseRequest,
      andThen(checkAuthorization),
      andThen(validateRequest),
      andThen(prepareResult(getter)),
      andThen(send(res, ctx)),
    )(req);

type Respond = (result: any) => MSWResolver;
export const respond: Respond = (result) => (req, res, ctx) =>
  send(res, ctx)({ isSuccess: true, data: result });

/** utilities **/
/* 
type ValidIfRequestIs = (
  expectedRequest: Partial<SimpleRequest>,
) => ValidateRequest;
export const validIfRequestIs: ValidIfRequestIs =
  (expectedRequest): ValidateRequest =>
  (originalRequest) =>
    new Promise((resolve, reject) => {
      const intersectRequest = pick(keys(expectedRequest), originalRequest);
      const result = equals(intersectRequest, expectedRequest);
      result
        ? resolve({ ...originalRequest, isValid: true, message: "clean" })
        : reject({
            ...originalRequest,
            isValid: false,
            message: "validation failed",
          });
    });
export const justValid: ValidateRequest = (req: SimpleRequest) =>
  Promise.resolve({ ...req, isValid: true, message: "clean" });


export const pass: MSWResolver = respond({ isSuccess: true });
*/
