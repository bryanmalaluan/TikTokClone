export const get = async ({
  url,
  payload,
  params,
}: {
  url: string;
  payload?: unknown;
  params?: string;
}) => {
  const bearerToken = `lJPKhsYOofyZyWRsKbEE4xOGn8Sd9gK5ysXouO9eZwLoYbFK2OO9lSuq`;

  const headers = {
    Authorization: bearerToken,
    "Content-Type": "application/json",
  };

  const response = await fetch(url, { headers });
  const result = await response?.json();
  return result;
};
