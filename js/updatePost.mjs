"use strict"

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = `https://nf-api.onrender.com/api/v1/social/posts/`;
const accessToken = localStorage.getItem("accessToken");

const updatePostForm = document.querySelector(".updateForm");
updatePostForm.addEventListener("submit", updatePost);

async function updatePost(event) {
    try {     
        event.preventDefault();

        const requiredTitleInput = document.querySelector(".required-title").value;
        const requiredBodyInput = document.querySelector(".required-body").value;

        const response = await fetch(`https://nf-api.onrender.com/api/v1/social/posts/${id}`, {
            method: "PUT",
            headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({
                title: `${requiredTitleInput}`,
                body: `${requiredBodyInput}`,
            }) 
        });
        const jsonResponse = await response.json();
        console.log(response);

        if(response.ok) {
            window.location.reload();
        }

        console.log(title.value);
    } catch (error) {
        console.log(error);
    }
}