export {};
/*
type PickByType<T, U> = { [K in keyof T as T[K] extends U ? K : never]: T[K] };
type OmitByType<T, U> = { [K in keyof T as T[K] extends U ? never : K]: T[K] };

type LoginInfo = { username: string; password: string };
type User = { name: string; score: number };

type Pipe = (...args: any[]) => any;
type PipeLine = Record<string, Pipe>;

type FlowState<T extends PipeLine> = [keyof T, ReturnType<T[keyof T]>];
type FlowPipe<T extends PipeLine> = T[keyof T];
type FlowContext<
  T extends PipeLine,
  U extends FlowState<T>,
  V extends FlowPipe<T>,
> = [ReturnType<V>, (partial: Partial<ReturnType<V>>) => void];

type TestPipeLine = {
  notLoggedIn: () => void;
  loggedIn: (loginInfo: LoginInfo) => User;
};

type API<T extends PipeLine> = {
  state: FlowState<T>;
  context: (pipe: FlowPipe<T>) => FlowContext<T, FlowState<T>, typeof pipe>;
};

const testPipeLine: TestPipeLine = {
  notLoggedIn: () => null,
  loggedIn: (loginInfo) => ({ name: "hello", score: 1 }),
};

type CreateFlowAPI = <T extends PipeLine>(pipeLine: T) => { currentState: T };

//const createFlow: CreateFlowAPI = (pipeLine) => {};

//createFlow<TestFlow>(testPipe);

//export default createFlow;

/*
const SomeComponent = () => {


}

*/
