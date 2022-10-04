async function registerUser(event) {
  event.preventDefault();

  const userName = document.querySelector("#user-name").value;
  const userEmail = document.querySelector("#user-email").value;
  const userPassword = document.querySelector("#user-password").value;

  console.log(userName, userEmail, userPassword);
  try {
    const response = await fetch("https://nf-api.onrender.com/api/v1/social/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: `${userName}`,
        email: `${userEmail}`,
        password: `${userPassword}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response);
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      document.querySelector(".form-container").classList.add("hidden");
      document.querySelector(".register-successful").classList.remove("hidden");
    }
  } catch (error) {
    console.log(error);
  }
}

const form = document.querySelector(".register-user-form");

form.addEventListener("submit", registerUser);
