export type QueryType<T> = {
  queryKey: (string | number | undefined)[];
  queryFn: () => Promise<T>;
  cacheTime?: number;
  staleTime?: number;
};
