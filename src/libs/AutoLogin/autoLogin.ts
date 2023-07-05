import api from "../../api";
import { useMyAccountStore } from "../../store/account/useMyAccountStore";
import { User } from "../../entity/user/user";
import { useAccount } from "../../store/account/useAccount";

const STORAGE = "wonderTokenV2";
const CREATOR_STORAGE = "creatorTokenV2";

type Token = {
  user: string | null;
};

const emptyToken: string = JSON.stringify({
  user: null,
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

export const saveAutoLogin = (field: "user", token: string) => {
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

type CreatorToken = {
  creator: number | null;
};

const emtpyCreatorToken = JSON.stringify({
  creator: null,
});

export const saveCreatorToken = (id: number) => {
  localStorage.setItem(CREATOR_STORAGE, JSON.stringify({ creator: id }));
};

export const deleteCreatorToken = () => {
  localStorage.setItem(CREATOR_STORAGE, JSON.stringify({ creator: null }));
};

export const getCreatorToken = (): number | null =>
  (
    JSON.parse(
      localStorage.getItem(CREATOR_STORAGE) ?? emtpyCreatorToken,
    ) as CreatorToken
  ).creator;
