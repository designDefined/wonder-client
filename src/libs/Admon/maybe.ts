export type Just<T> = { _state: "Just"; _value: T };
export type Nothing = { _state: "Nothing"; _value: null };

export type Maybe<T> = Just<T> | Nothing;

export type JustJSON<T extends Record<string, any>> = {
  [K in keyof T]: Just<T[K]>;
};
export type NothingJSON<T extends Record<string, any>> = {
  [K in keyof T]: Nothing;
};

export const maybe = {
  just: <T>(data: T): Just<T> => ({ _state: "Just", _value: data }),
  nothing: (): Nothing => ({ _state: "Nothing", _value: null }),
};
