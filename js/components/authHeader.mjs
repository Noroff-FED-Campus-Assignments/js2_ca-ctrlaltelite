function authHeader(token) {
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  return headers;
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns number
 * @example 4 + 4 returns 8
 */
 function cal(a, b) {
  return a + b;
}

cal(4 + 4);

export { authHeader };
