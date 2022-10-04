"use strict"
const url = "https://nf-api.onrender.com";
// const token = {
//     headers: {
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsIm5hbWUiOiJqb3dhbmRlciIsImVtYWlsIjoiam93YW5kZXIuam93YW5kZXJAbm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2MjgyMzgxOH0.Z3F3MIe-S3vixXKh6ww4MDy3hmtBDq4wJgRh_aZ8KqU',

//     },
//   }
const loginForm = document.querySelector("#login-form");
const userEmail = document.querySelector("#user-email");
const password = document.querySelector("#user-password");


const userLogin = {
    "email": "jowander.jowander@noroff.no",
    "password": "UzI1NiIsInR5cCI"
}

const contentContainer = document.querySelector(".container");

async function logIn(url, data) {
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, postData);
        console.log(response);
        const jsonResponse = await response.json();
        const accessToken = jsonResponse.accessToken;
        localStorage.setItem("accessToken", accessToken);

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (jsonResponse.ok) {
                window.location.href = ".././feed.html";
            } else {
                console.log(`Wrong username or password`);
            }
        })
        
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
}



logIn(`${url}/api/v1/social/auth/login`, userLogin);