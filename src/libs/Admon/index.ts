import { ReactNode, useEffect, useState } from "react";
import { range } from "ramda";

export type Async<Success, Error> =
  | { _status: "Idle"; _value: null }
  | { _status: "Fail"; _value: Error }
  | { _status: "Success"; _value: Success };

export const useFetch = <Success, Error>(f: Promise<Success | Error>) => {
  const [get, set] = useState<Async<Success, Error>>({
    _status: "Idle",
    _value: null,
  });

  useEffect(() => {
    f.then(
      (res) => {
        const data = res as Success;
        set({ _status: "Success", _value: data });
      },
      (err) => {
        const data = err as Error;
        set({ _status: "Fail", _value: data });
      },
    );
  }, []);

  const map = (mapper: (data: Success) => ReactNode, altComponent: ReactNode) =>
    get._status === "Success" ? mapper(get._value) : altComponent;

  return {
    read: () => get,
    map,
  };
};

export const useFetches = <Success, Error>(
  f: Promise<Success | Error>,
  config: { amount: number } = { amount: 3 },
) => {
  const [get, set] = useState<Async<Success[], Error>>({
    _status: "Idle",
    _value: null,
  });

  useEffect(() => {
    f.then(
      (res) => {
        const data = res as Success[];
        set({ _status: "Success", _value: data });
      },
      (err) => {
        const data = err as Error;
        set({ _status: "Fail", _value: data });
      },
    );
  }, []);

  const map = (mapper: (data: Success) => ReactNode, altComponent: ReactNode) =>
    get._status === "Success"
      ? get._value.map(mapper)
      : range(0, config.amount).map(() => altComponent);

  return {
    read: () => get,
    map,
  };
};
