"use strict";
import { deletePost } from "./delete.mjs";
import { follow } from "./follow.mjs";
import { unfollow } from "./unfollow.mjs";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const userName = params.get("name");
const id = params.get("id");

const specificUrl = `https://nf-api.onrender.com/api/v1/social/posts/${id}`;
const followUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${userName}`;

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

    document.querySelector(".likes-count").innerHTML = jsonResponse._count.reactions;

    if (jsonResponse.author.name === userName) {
      const formContainer = document.querySelector(".edit-post");
      formContainer.classList.remove("hidden");
    }

    specificPost.innerHTML = `<div class="flex justify-center items-center m-4">
                                  <div class="">
                                    <img
                                    src="${jsonResponse.author.avatar}"
                                    class="w-8 h-8 rounded-full"
                                    alt="Profile picture"
                                    onerror="this.src = '/img/userPlacegolder.png';"
                                    />
                                  </div>
                                        <h3 class="m-4 text-center">${jsonResponse.author.name}</h3>
                                    </div>    
                                    <div class="flex justify-center py-4">
                                        <button class="bg-mainGray mx-4 p-2 rounded-sm followBtn">Follow</button>
                                        <button class="bg-mainGray mx-4 p-2 rounded-sm unfollowBtn">Unfollow</button>
                                    </div>
                                    <div class="flex flex-col my-8 w-1/2 m-auto">
                                      <div class="border bg-border-mainBlue self-center w-full">
                                        <h4 class="flex justify-center text-xl font-bold my-8 mx-auto">${jsonResponse.title}<h4>
                                        <div class="max-w-lg my-8">
                                          <img
                                          class="mx-auto" 
                                          src="${jsonResponse.media}" />
                                          <p class="my-8 text-center">${jsonResponse.body}</p>
                                        </div>
                                      </div>
                                    </div>`;
  } catch (error) {
    console.log(error);
  } finally {
    const deleteBtn = document.querySelector(".deleteBtn");
    const followBtn = document.querySelector(".followBtn");
    const unfollowBtn = document.querySelector(".unfollowBtn");

    deleteBtn.addEventListener("click", () => {
      deletePost(`${specificUrl}`);
    });

    followBtn.addEventListener("click", () => {
      follow(`${followUrl}/follow`);
    });

    unfollowBtn.addEventListener("click", () => {
      console.log("click");
      unfollow(`${followUrl}/unfollow`);
    });
  }
}

displayPostForm(`${specificUrl}?_author=true`);

const backBtn = document.querySelector(".back-btn");

backBtn.addEventListener("click", () => {
  window.history.back();
});
