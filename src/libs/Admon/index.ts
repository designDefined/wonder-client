import { useEffect, useState } from "react";

export type Async<T> =
  | { _status: "Idle"; value: null }
  | { _status: "Fail"; value: null }
  | { _status: "Success"; value: T };

export const useFetch = <T>(
  f: Promise<T>,
  fMap: (data: T) => any = (data) => data,
): Async<ReturnType<typeof fMap>> => {
  const [get, set] = useState<Async<ReturnType<typeof fMap>>>({
    _status: "Idle",
    value: null,
  });

  useEffect(() => {
    f.then(
      (res) => {
        set({ _status: "Success", value: fMap(res) });
      },
      () => {
        set({ _status: "Fail", value: null });
      },
    );
  }, []);

  return get;
};
