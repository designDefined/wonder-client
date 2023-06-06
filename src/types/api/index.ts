type RequestHeader = object;
type RequestQuery = Record<string, string | number>;
type RestReturnValue =
  | object
  | object[]
  | string
  | string[]
  | boolean
  | boolean[];
type Get = (request?: {
  header?: RequestHeader;
  query?: RequestQuery;
}) => RestReturnValue;
type Post = (request?: {
  header?: RequestHeader;
  query?: RequestQuery;
  data?: object;
}) => RestReturnValue;

type RestAPI = {
  get?: Get;
  post?: Post;
};
type Leaf = RestAPI | Record<string, RestAPI> | Record<string, Leaf>;

export interface apiTree extends Record<string, Leaf> {
  ping: {
    get: () => { success: boolean };
  };
}
