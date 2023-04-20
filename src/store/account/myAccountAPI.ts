import { getJSON, postJSONtoJSON } from "../../tools/utils/api";
type NaverLoginResponse = {
  user: {
    platformType: string;
    platformId: string;
    name: string;
    nickname?: string;
    phoneNumber?: string;
    email: string;
    created_at: Date;
    last_modified_at: Date;
  };
  needRegister: boolean;
};
type RegisterResponse = {
  user: {
    platformType: string;
    platformId: string;
    name: string;
    nickname?: string;
    phoneNumber?: string;
    email: string;
    created_at: Date;
    last_modified_at: Date;
  };
};

export const test = async <T>() => {
  try {
    const res = (await getJSON("/json")) as T;
    return res;
  } catch (e) {
    console.warn(e);
  }
};
export const naverLogin = async (code: string) => {
  try {
    const response = await postJSONtoJSON<NaverLoginResponse>("/login/naver", {
      code,
    });
    return response;
  } catch (e) {
    console.warn(e);
  }
};

export const register = async (
  id: string,
  name: string,
  phoneNumber: string,
) => {
  try {
    const response = await postJSONtoJSON<RegisterResponse>("/register", {
      id,
      name,
      phoneNumber,
    });
    return response;
  } catch (e) {}
};
