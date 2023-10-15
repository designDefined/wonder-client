type Token = string;
const TOKEN = "wonder_token_V3";

export const getToken = (): Token | null => {
  return localStorage.getItem(TOKEN);
};

export const saveToken = (token: Token) => {
  localStorage.setItem(TOKEN, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN);
};
