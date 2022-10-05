function authHeader(token) {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  return headers;
}

export { authHeader };
