export type QueryType<T> = {
  queryKey: (string | number | undefined)[];
  queryFn: () => Promise<T>;
  retry?: number;
  cacheTime?: number;
  staleTime?: number;
};

export type MutationType<T, Q> = {
  mutationFn: (data: Q) => Promise<T>;
};
