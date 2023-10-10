export type Fetchable<T> = { isPending: boolean } & (
  | { isLoaded: false; data: null }
  | { isLoaded: true; data: T }
);
