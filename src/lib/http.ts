export async function get(url: string): Promise<any> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}
export async function post(url: string, data: {}): Promise<any> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  return res;
}
