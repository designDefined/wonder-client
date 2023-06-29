import { useEffect, useState } from "react";

const useFetch = <Success>(fetchFunction: Promise<Success>, deps: any[]) => {
  const [get, set] = useState<Success | null>(null);

  useEffect(() => {
    fetchFunction.then(
      (res) => set(res),
      () => set(null),
    );
  }, deps);

  return [get, set] as const;
};

export default useFetch;
