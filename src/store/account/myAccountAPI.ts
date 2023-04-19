import { getJSON } from "../../tools/utils/api";

export const test = async <T>() => {
  try {
    const res = (await getJSON("/json")) as T;
    return res;
  } catch (e) {
    console.warn(e);
  }
};
export const login = () => getJSON("/json");
