import { ReactNode, useEffect, useState } from "react";
import { all, equals, KeysOfUnion, map, range } from "ramda";
import { Just, JustJSON, Maybe, maybe, Nothing, NothingJSON } from "./maybe";

export type Async<Success> =
  | { _state: "Idle"; _value: Nothing }
  | { _state: "Fail"; _value: Nothing }
  | { _state: "Success"; _value: Just<Success> };

export type AsyncJSON<Success extends Record<string, any>> =
  | { _state: "Idle"; _value: NothingJSON<Success> }
  | { _state: "Fail"; _value: NothingJSON<Success> }
  | { _state: "Success"; _value: JustJSON<Success> };

export const useFetch = <Success>(
  fetchFunction: Promise<Success>,
  deps: any[] = [],
) => {
  const [get, set] = useState<Async<Success>>({
    _state: "Idle",
    _value: maybe.nothing(),
  });

  useEffect(() => {
    //reset when re-fetch
    if (get._state !== "Idle") set({ _state: "Idle", _value: maybe.nothing() });
    fetchFunction.then(
      (res) => {
        set({ _state: "Success", _value: maybe.just(res) });
      },
      () => {
        set({ _state: "Fail", _value: maybe.nothing() });
      },
    );
  }, deps);

  return {
    read: get._value,
  };
};

export const useJSONFetch = <Success extends Record<string, any>>(
  fetchFunction: Promise<Success>,
  keys: KeysOfUnion<Success>[],
  deps: any[] = [],
) => {
  const empty = Object.fromEntries(
    keys.map(
      (key): [KeysOfUnion<Success>, { _state: "Nothing"; _value: null }] => [
        key,
        maybe.nothing(),
      ],
    ),
  ) as NothingJSON<Success>;

  const [get, set] = useState<AsyncJSON<Success>>({
    _state: "Idle",
    _value: empty,
  });

  useEffect(() => {
    if (get._state !== "Idle") set({ _state: "Idle", _value: empty });
    fetchFunction.then(
      (res) =>
        set({
          _state: "Success",
          _value: map(maybe.just, res) as JustJSON<Success>,
        }),
      () => set({ _state: "Fail", _value: empty }),
    );
  }, deps);

  return { read: get._value };
};

export const useFetches = <Success>(
  fetchFunction: Promise<Success[]>,
  deps: any[] = [],
  config: { amount: number } = { amount: 3 },
) => {
  const [get, set] = useState<Async<Success[]>>({
    _state: "Idle",
    _value: maybe.nothing(),
  });

  useEffect(() => {
    if (!(deps.length > 0 && all(equals(undefined))(deps)))
      fetchFunction.then(
        (res) => {
          set({ _state: "Success", _value: maybe.just(res) });
        },
        () => {
          set({ _state: "Fail", _value: maybe.nothing() });
        },
      );
  }, deps);

  const map = (mapper: (data: Success) => ReactNode, altComponent: ReactNode) =>
    get._state === "Success"
      ? get._value._value.map(mapper)
      : range(0, config.amount).map(() => altComponent);

  return {
    read: () => get,
    map,
  };
};
