"use strict"
const url = "https://nf-api.onrender.com";

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
            if (response.status === 200) {
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