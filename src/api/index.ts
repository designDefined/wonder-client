const get = async (url: string): Promise<any> =>
  fetch(url, { method: "GET", mode: "cors", cache: "no-cache" }).then((res) =>
    res.json(),
  );

const post = async (url: string, data: object = {}): Promise<any> =>
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      ContentType: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

const api = { get, post };
export default api;
