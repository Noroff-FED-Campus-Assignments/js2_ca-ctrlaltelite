export function getLocalStorage() {
  const accessToken = localStorage.getItem("accessToken");
  const userName = localStorage.getItem("userName");

  const storedValues = { accessToken, userName };

  return storedValues;
}

getLocalStorage();

// Do this where you import the function :)
//   const { accessToken, userName } = getLocalStorage();
