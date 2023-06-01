"use strict";
const url = "https://nf-api.onrender.com/api/v1/social/auth/login";

const loginForm = document.querySelector("#login-form");
const userEmail = document.querySelector(".testEmail");
const password = document.querySelector("#user-password");

loginForm.addEventListener("submit", handleLogin);

const contentContainer = document.querySelector(".container");

async function handleLogin(e) {
  e.preventDefault();

  const userLogin = {
    email: userEmail.value,
    password: password.value,
  };
  const response = await logIn(url, userLogin);
  if (response.status === 200) {
    window.location.href = ".././feed.html";
  } else {
    document.querySelector(".email-fail").classList.remove("hidden");
    document.querySelector(".password-fail").classList.remove("hidden");
  }
}

async function logIn(url) {
  const userLogin = {
    email: `${userEmail.value}`,
    password: `${password.value}`,
  };
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    };

    const response = await fetch(url, postData);
    const jsonResponse = await response.json();
    const userName = jsonResponse.name;
    const accessToken = jsonResponse.accessToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userName", userName);

    return response;
  } catch (error) {
    console.log(error);
  }
}
