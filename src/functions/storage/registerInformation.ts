type RegisterInformation = { type: "test" | "naver"; email: string };

const REGISTER_INFORMATION = "wonder_register_information_V3";

export const getRegisterInformation = (): RegisterInformation | null => {
  return JSON.parse(
    localStorage.getItem(REGISTER_INFORMATION) ?? "null",
  ) as RegisterInformation | null;
};

export const saveRegisterInformation = (information: RegisterInformation) => {
  localStorage.setItem(REGISTER_INFORMATION, JSON.stringify(information));
};

export const removeRegisterInformation = () => {
  localStorage.removeItem(REGISTER_INFORMATION);
};
