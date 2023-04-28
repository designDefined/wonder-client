export const baseURL = "http://localhost:8000";

type ErrorHandler = (err: any) => void;

export const getJSON = async <T>(url: string) => {
  const response = await fetch(baseURL + url, {
    method: "GET",
    mode: "cors",
  });
  const parsed = (await response.json()) as T;
  return parsed;
};
export const postJSONtoJSON = async <T>(
  url: string,
  body: Record<string, any>,
) => {
  const response = await fetch(baseURL + url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const parsed = (await response.json()) as T;
  return parsed;
};
