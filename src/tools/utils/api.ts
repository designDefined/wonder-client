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
export const postJSONtoJSON = async () => {};
