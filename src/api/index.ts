const get = async <T>(url: string): Promise<T> =>
  fetch(url, { method: "GET", mode: "cors", cache: "no-cache" }).then(
    (res) => res.json() as T,
  );

const post = async <T>(url: string, data: object = {}): Promise<T> =>
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      ContentType: "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json() as T);

const api = { get, post };
export default api;
