export const isValidRegisterEmail = (input: string): boolean =>
  !(input.length < 5) && input.includes("@");

export const isValidRegisterName = (input: string): boolean =>
  !(input.length < 2) && !(input.length > 30);

export const isValidRegisterPhoneNumber = (input: string): boolean =>
  (input.length === 11 || 13) &&
  (input.startsWith("010") || input.startsWith("+8210"));
