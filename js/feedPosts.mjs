"use strict";

import { createPosts } from "./components/createPosts.mjs";

const url = "https://nf-api.onrender.com";

const feedContainer = document.querySelector("#post-section");
const suggestionFeed = document.querySelector("#suggestions-post");
const modalForm = document.querySelector(".modalContainer");

const accessToken = localStorage.getItem("accessToken");
const headers = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

const postBody = {
  title: "",
  body: "",
};

async function getFeedPosts(url, data) {
  try {
    const response = await fetch(url, headers);

    const jsonResponse = await response.json();

    for (let i = 0; i < jsonResponse.length; i++) {
      const postInformation = jsonResponse[i];
      // console.log(jsonResponse[i]._count.reactions);

      if (i <= 9) {
        createPosts(feedContainer, postInformation, postInformation.author.avatar, postInformation.author.name);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function getSuggestionFeed(url) {
  try {
    const response = await fetch(url, headers);

    const jsonResponse = await response.json();

    for (let i = 0; i < jsonResponse.length; i++) {
      if (i === 3) {
        break;
      }
      const postInformation = jsonResponse[i];

      suggestionFeed.innerHTML = `<div class="w-full border rounded-sm border-mainGrey p-2">
                                    <div class="flex items-center mb-4">
                                        <img
                                            src="${postInformation.author.avatar}"
                                            class="w-6 h-6 rounded-full"
                                            alt="Profile picture"
                                            onerror="this.src = '/img/userPlacegolder.png';"
                                        />
                                        <h3 class="ml-2 text-sm font-headers">${postInformation.author.name}</h3>
                                    </div>
                                        <div class="text-sm mb-3">${postInformation.title}
                                            <img src="${postInformation.media}" />
                                            <p>${postInformation.body}</p>
                               
                                        </div>
                                        <a class="bg-mainBlue p-1 text-xs rounded-sm text-fontWhite" href="./../../specificPost.html?id=${postInformation.id}&name=${postInformation.author.name}">View post</a>
                                </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns number
 * @example 2 + 2 returns 4
 */
function sum(a, b) {
  return a + b;
}

sum(2 + 2);

getSuggestionFeed(`${url}/api/v1/social/posts/?_author=true`, postBody);
getFeedPosts(`${url}/api/v1/social/posts/?_author=true&_reactions=true&_comments=true`, postBody);
