import { useCallback, useState } from "react";

const useFormState = <DataType extends Record<string, any>>(
  initialData: DataType,
) => {
  const [data, setData] = useState<DataType>(initialData);

  const setDataValue = useCallback(
    <K extends keyof DataType>(key: K, value: DataType[K]) =>
      setData({ ...data, [key]: value }),
    [data],
  );

  return [data, setDataValue] as const;
};

export default useFormState;
