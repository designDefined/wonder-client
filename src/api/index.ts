import { getUserToken } from "../libs/AutoLogin/autoLogin";

const isDev = false;
const baseURL = isDev ? "http://localhost:8000" : "https://mywondererserver.de";

const get = async <T>(
  url: string,
  header: Record<string, any> = {},
): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: header,
  }).then((res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res.json());
  });
const post = async <T>(
  url: string,
  data: object = {},
  header: Record<string, any> = {},
): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      ...header,
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res.json());
  });

const authedGet = async <T>(
  url: string,
  header: Record<string, any> = {},
): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: { Authorization: `${getUserToken() ?? "no_token"}`, ...header },
  }).then((res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res.json());
  });

const authedPost = async <T>(
  url: string,
  data: object = {},
  header: Record<string, any> = {},
): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getUserToken() ?? "no_token"}`,
      ...header,
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res.json());
  });

const authedPut = async <T>(
  url: string,
  data: object = {},
  header: Record<string, any> = {},
): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getUserToken() ?? "no_token"}`,
      ...header,
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res.json());
  });

const api = { get, post };
export const authedApi = { get: authedGet, post: authedPost, put: authedPut };
export default api;
