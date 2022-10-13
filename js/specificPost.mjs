"use strict";
import { deletePost } from "./delete.mjs";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const userName = localStorage.getItem("userName");

const specificUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;
console.log(id);

const specificPost = document.querySelector(".specificPost");

const accessToken = localStorage.getItem("accessToken");

export async function displayPostForm(url) {
  try {
    const getData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, getData);
    const jsonResponse = await response.json();
    // console.log(jsonResponse);

    if (jsonResponse.author.name === userName) {
      const formContainer = document.querySelector(".editAndDelete");
      formContainer.classList.remove("hidden");
      console.log("Samme");
    }

    specificPost.innerHTML = `<div class="flex m-4">
                                        <img
                                            src="${jsonResponse.author.avatar}"
                                            class="w-8 h-8 rounded-full"
                                            alt="Profile picture"
                                            onerror="this.src = '/img/userPlacegolder.png';"
                                        />
                                        <h3 class="m-4 text-center">${jsonResponse.author.name}</h3>
                                        </div>
                                        <div class="mx-4"">${jsonResponse.title}
                                            <img
                                            class="" 
                                            src="${jsonResponse.media}" />
                                            <p>${jsonResponse.body}</p>
                                            <hr class="mx-4">
                                        </div>
                                       
                                        `;
  } catch (error) {
    console.log(error);
  } finally {
    const deleteBtn = document.querySelector(".deleteBtn");
    const updatePost = document.querySelector(".updatePost");

    deleteBtn.addEventListener("click", () => {
      deletePost(`${specificUrl}`);
    });
  }
}

displayPostForm(`${specificUrl}?_author=true`);
