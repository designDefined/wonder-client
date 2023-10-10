import { useCallback, useEffect, useState } from "react";

const useFetch = <Success>(
  fetchFunction: () => Promise<Success>,
  deps: any[],
) => {
  const [get, set] = useState<Success | null>(null);

  const refetch = useCallback(() => {
    fetchFunction().then(
      (res) => {
        set(res);
      },
      () => null,
    );
  }, [fetchFunction]);

  useEffect(() => {
    fetchFunction().then(
      (res) => set(res),
      () => null,
    );
  }, deps);

  return [get, set, refetch] as const;
};

export default useFetch;
