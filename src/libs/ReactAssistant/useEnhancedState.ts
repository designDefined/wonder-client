import { useCallback, useState } from "react";

const useEnhancedState = <T extends Record<string, any>>(initialState: T) => {
  const [get, set] = useState<T>(initialState);
  const setValue = useCallback(
    <K extends keyof T>(key: K, value: T[K]) => set({ ...get, [key]: value }),
    [get],
  );

  return [get, set, setValue] as const;
};

export default useEnhancedState;
