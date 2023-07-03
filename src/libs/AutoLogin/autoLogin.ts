import api from "../../api";
import { useMyAccountStore } from "../../store/account/useMyAccountStore";
import { User } from "../../entity/user/user";
import { useAccount } from "../../store/account/useAccount";

const STORAGE = "wonderTokenV2";
export const saveAutoLogin = (
  field: "user" | "creator",
  token: string | number,
) => {
  const prevToken: Token = getToken();
  localStorage.setItem(
    STORAGE,
    JSON.stringify({ ...prevToken, [field]: `${token}` }),
  );
};
export const deleteAutoLogin = () => {
  localStorage.removeItem(STORAGE);
  useMyAccountStore.getState().actions.logout();
};
export const deleteAutoLoginCreator = () => {
  const prevToken: Token = getToken();
  localStorage.setItem(
    STORAGE,
    JSON.stringify({ ...prevToken, creator: null }),
  );
};

export const tryAutoLogin = () => {
  const token = getToken();
  if (token.user !== null)
    api
      .post<User>("/user/autoLogin", { id: token.user })
      .then((res) => {
        useMyAccountStore.getState().actions.login(res);
      })
      .catch(() => deleteAutoLogin());
};

type Token = {
  user: string | null;
  creator: string | null;
};

const emptyToken: string = JSON.stringify({
  user: null,
  creator: null,
});

export const getToken = (): Token =>
  JSON.parse(localStorage.getItem(STORAGE) ?? emptyToken) as Token;

export const getUserToken = (): string | null => {
  const storeToken = useAccount.getState().user?.token;
  return (
    storeToken ??
    (JSON.parse(localStorage.getItem(STORAGE) ?? emptyToken) as Token).user
  );
};

export const getCreatorToken = (): string | null =>
  (JSON.parse(localStorage.getItem(STORAGE) ?? emptyToken) as Token).creator;
