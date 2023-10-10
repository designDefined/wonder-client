export {};
/*
export type Just<T> = { _state: "Just"; _value: T };
export type Nothing = { _state: "Nothing"; _value: null };

export type Maybe<T> = Just<T> | Nothing;
export type MaybeJSON<T extends Record<string, any>> =
  | JustJSON<T>
  | NothingJSON<T>;

export type JustJSON<T extends Record<string, any>> = {
  [K in keyof T]: Just<T[K]>;
};
export type NothingJSON<T extends Record<string, any>> = {
  [K in keyof T]: Nothing;
};

export const maybe = {
  just: <T>(data: T): Just<T> => ({ _state: "Just", _value: data }),
  nothing: (): Nothing => ({ _state: "Nothing", _value: null }),
  isNothing: <T>(value: Maybe<T>): value is Nothing =>
    value._state === "Nothing",
  isNothingJSON: <T extends Record<string, any>>(
    value: MaybeJSON<T>,
  ): value is NothingJSON<T> => {
    return Object.values(value).every((v) => v._state === "Nothing");
  },
  read: <T>(value: Just<T>): T => value._value,
  safeRead: <T>(value: Maybe<T>, instead: T): T =>
    maybe.isNothing(value) ? instead : value._value,
};
*/
