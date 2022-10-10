"use strict"

const postIdUrl = "https://nf-api.onrender.com"// + id;
const accessToken = localStorage.getItem("accessToken");

const putBody = {
    "title": "",
    "body": "",
    "tags": [""],
    "media": ""
}

async function updatePost(url, data, event) {
    try {
        event.preventDefault();
        const requiredTitleInput = document.querySelector("#required-title").value;
        const requiredBodyInput = document.querySelector("#required-body").value;
        const requiredTagsInput = document.querySelector("#required-tags").value;
        const requiredMediaInput = document.querySelector("#required-media").value;

        if (title.value.length > 1 && body.value.length > 1 && media.value.length > 1) {
            const response = await fetch("https://nf-api.onrender.com/api/v1/social/posts/3492", {
              method: "PUT",
              body: JSON.stringify(data),
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            const json = await response.json(url);
            title.value = "";
            body.value = "";
            tags.value = "";
            media.value ="";
        } 

    } catch (error) {
        console.log(error);
    }
}

//modalOpen.addEventListner("click", modalOpen);

updatePost(`${url}/api/v1/social/posts/`), putBody;