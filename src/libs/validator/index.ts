/**
 * Register
 */

import { Wonder } from "../../entity/wonder/wonder";

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

/**
 * New Wonder
 */

export const isValidWonderTitle = (input: string): boolean =>
  !(input.length < 2 || input.length > 30);

export const isValidWonderSchedule = (input: Wonder["schedule"]): boolean =>
  input.length > 0;

export const isValidWonderLocation = (input: Wonder["location"]): boolean =>
  input.name.length > 0;
