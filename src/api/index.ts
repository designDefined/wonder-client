import { getToken } from "../functions/storage/token";

const isDev = false;
const baseURL = isDev ? "http://localhost:8000" : "https://mywondererserver.de";

const get = <T>(url: string, header: Record<string, string> = {}): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: header,
  }).then((res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res);
  });
const post = <T>(
  url: string,
  data: object = {},
  header: Record<string, string> = {},
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
  }).then((res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res);
  });

const authedGet = <T>(
  url: string,
  header: Record<string, string> = {},
): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: { Authorization: `${getToken() ?? "no_token"}`, ...header },
  }).then((res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res);
  });

const authedPost = <T>(
  url: string,
  data: object = {},
  header: Record<string, string> = {},
): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getToken() ?? "no_token"}`,
      ...header,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res);
  });

const authedPut = <T>(
  url: string,
  data: object = {},
  header: Record<string, string> = {},
): Promise<T> =>
  fetch(`${baseURL}${url}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${getToken() ?? "no_token"}`,
      ...header,
    },
    body: JSON.stringify(data),
  }).then((res) => {
    return res.ok ? (res.json() as T) : Promise.reject(res);
  });

const api = { get, post };
export const authedApi = { get: authedGet, post: authedPost, put: authedPut };
export default api;
