import { Codex } from "./types";
import { ReactNode } from "react";

export type CodexSearchResult = {
  isSuccess: boolean;
  element: ReactNode;
  params?: Record<string, string | undefined>;
};

function DefaultIndexComponent() {
  return <div>codex index</div>;
}

function DefaultErrorComponent() {
  return <div>codex error page</div>;
}

export const searchCodex = (
  codexTree: Codex,
  path: string[],
): CodexSearchResult => {
  const searchStack: Codex[] = [codexTree];

  //아무 path도 없을 때는 index로
  if (path.length === 0 || (path.length === 1 && path[0] === "")) {
    return { isSuccess: true, element: codexTree._index };
  }

  //path 배열을 따라 tree에서 search
  for (let i = 0; i < path.length; i++) {
    const pathName: string = path[i];
    const lastCodex: Codex = searchStack[searchStack.length - 1];
    const target = lastCodex[pathName];
    if (typeof target === ("undefined" || "null")) {
      //target이 undefined일 경우:
      if (lastCodex._params) {
        const parameterNames = lastCodex._params as readonly string[];
        const parameterValues = path.slice(i) as readonly string[];
        if (parameterValues.length > parameterNames.length) break;
        const params: Record<string, string | undefined> = {};
        parameterNames.forEach((name, index) => {
          params[name] = parameterValues[index];
        });
        return { isSuccess: true, element: lastCodex._index, params };
      } else {
        break;
      }
    } else if (typeof target === "object" && target?.hasOwnProperty("_index")) {
      //target이 codex일 경우: path가 더 남아있지 않으면 _index를 리턴, 아니면 target을 스택에 넣고 반복
      const nextCodex = target as Codex;
      if (i === path.length - 1) {
        return { isSuccess: true, element: nextCodex._index };
      } else {
        searchStack.push(nextCodex);
      }
    } else {
      //target이 ReactNode일 경우: path가 더 남아 있지 않으면 target을 리턴
      const element = target as ReactNode;
      if (i === path.length - 1) return { isSuccess: true, element };
    }
  }

  // 에러 컴포넌트 찾기
  for (let i = searchStack.length - 1; i > -1; i--) {
    if (searchStack[i]._error)
      return { isSuccess: false, element: searchStack[i]._error };
  }
  return { isSuccess: false, element: <DefaultErrorComponent /> };
};
