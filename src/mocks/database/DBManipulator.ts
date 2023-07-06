import { filter, find, findIndex, pipe, propEq, slice } from "ramda";

type FindOne = <T>(
  data: T[],
) => (validator: (Target: T) => boolean) => T | undefined;

type FindAll = <T>(data: T[]) => (validator: (Target: T) => boolean) => T[];

type FindMultiple = <T>(
  data: T[],
) => (validator: (Target: T) => boolean, amount: number) => T[] | undefined;

export const findOne: FindOne = (data) => (validator) => find(validator)(data);

export const findMultiple: FindMultiple = (data) => (validator, amount) =>
  pipe(findIndex(validator), (startIndex) => slice(startIndex, amount, data))(
    data,
  );

export const findAll: FindAll = (data) => (validator) =>
  filter(validator)(data);

export const delayedReturn = <T>(value: T): Promise<T> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value !== undefined) {
        resolve(value);
      } else {
        reject(new Error("Data not found"));
      }
    }, 1000);
  });

export type FindByProperty<
  Value extends Record<string, any>,
  Key extends keyof Value,
> = (value: Value[Key]) => Promise<Value | undefined>;

export const findByProperty = (key: string) => (data: any[]) =>
  pipe((value) => propEq(value, key), findOne(data), delayedReturn);

export type FindAllByProperty<
  Value extends Record<string, any>,
  Key extends keyof Value,
> = (value: Value[Key]) => Promise<Value[]>;

export const findAllByProperty = (key: string) => (data: any[]) =>
  pipe((value) => propEq(value, key), findAll(data), delayedReturn);
