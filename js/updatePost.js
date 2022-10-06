"use strict"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const postIdUrl = "https://nf-api.onrender.com" + id;

const putBody = {
    "title": "",
    "body": "",
    "tags": [""],
    "media": ""
}

async function updatePost(url, data) {
    try {
        const putData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, headers);
        const jsonResponse = await response.json();

        for (let i = 0; i < jsonResponse.length; i++) {
            console.log(jsonResponse[i]);
        }


    } catch (error) {
        console.log(error);
    }
}

//modalOpen.addEventListner("click", modalOpen);

updatePost(`${url}/api/v1/social/posts/`), putBody;