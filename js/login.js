"use strict"
const url = "https://nf-api.onrender.com/api/v1/social/auth/login";

const loginForm = document.querySelector("#login-form");
const userEmail = document.querySelector(".testEmail");
const password = document.querySelector("#user-password");

loginForm.addEventListener("submit", handleLogin);

const contentContainer = document.querySelector(".container");

async function handleLogin(e){
    e.preventDefault();

    const userLogin = {
        "email": userEmail.value,
        "password": password.value
    }
    console.log(userLogin)
    const response = await logIn(url, userLogin);
    console.log(response)
    if(response.status === 200){
        window.location.href = ".././feed.html";
    } else {
        console.log(`Wrong username or password`);
    }
}
    

async function logIn(url) {
    const userLogin = {
    "email": `jowander.jowander@noroff.no`,
    "password": `UzI1NiIsInR5cCI`
};
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLogin)
        };

        const response = await fetch(url, postData);
        console.log(response);
        const jsonResponse = await response.json();
        const userName = jsonResponse.name;;
        const accessToken = jsonResponse.accessToken;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userName", userName);

        // loginForm.addEventListener("submit", (e) => {
        //     e.preventDefault();
        //     if (response.status === 200) {
        //         window.location.href = ".././feed.html";
        //     } else {
        //         console.log(`Wrong username or password`);
        //     }
        // })
        
        return response;
    } catch (error) {
        console.log(error);
    }
}