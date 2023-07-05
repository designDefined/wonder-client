/**
 * Register
 */

export const isValidRegisterEmail = (input: string): boolean =>
  !(input.length < 5) && input.includes("@");

export const isValidRegisterName = (input: string): boolean =>
  !(input.length < 2) && !(input.length > 30);

export const isValidRegisterPhoneNumber = (input: string): boolean =>
  (input.length === 11 || 13) &&
  (input.startsWith("010") || input.startsWith("+8210"));

/**
 * New Creator
 */

export const isValidCreatorName = (input: string): boolean =>
  !(input.length < 2 || input.length > 15);

export const isValidCreatorSummary = (input: string): boolean =>
  !(input.length < 1 || input.length > 30);

export const isValidInstagram = (input: string): boolean =>
  input.length === 0 || input[0] === "@";
