"use strict";

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
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, headers);

    const jsonResponse = await response.json();

    for (let i = 0; i < jsonResponse.length; i++) {
      const postInformation = jsonResponse[i];
      console.log(jsonResponse[i]._count.reactions);

      if (i <= 9) {
        feedContainer.innerHTML += `
        <div class="thisPost mb-6 w-full border border-mainGray rounded-sm">
            <div class="flex m-4 items-center">
                <img
                    src="${postInformation.author.avatar}"
                    class="w-8 h-8 rounded-full"
                    alt="Profile picture"
                    onerror="this.src = '/img/userPlacegolder.png';"
                />
                <h3 class="ml-2 text-sm text-center">${postInformation.author.name}</h3>
            </div>
            <div class="mx-4 text-md">${postInformation.title}
            <div class="image-container mb-5">
                <img
                src="${postInformation.media}"
                class="h-50"
                 />
            </div>
                <p class="">${postInformation.body}</p>

            </div>
            <div>
              <p class="mx-4">Reactions </p>
            </div>
            <div class="mx-4 py-5">
                <p class="text-xs mb-2">${postInformation._count.reactions} likes</p>
                <a href=./../specificPost.html?id=${postInformation.id} class="bg-mainGray p-1 text-xs rounded-sm w-1/4 closeModal openModal">View post</a>
            </div>
        </div>`;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function getSuggestionFeed(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
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
                                        <h3 class="ml-2 text-sm">${postInformation.author.name}</h3>
                                    </div>
                                        <div class="text-sm mb-3">${postInformation.title}
                                            <img src="${postInformation.media}" />
                                            <p>${postInformation.body}</p>
                               
                                        </div>
                                        <a href=./../specificPost.html?id=${postInformation.id} class="bg-mainGray p-1 text-xs rounded-sm w-1/4 closeModal openModal">View post</a>
                                </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getComments(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, headers);
    const jsonResponse = await response.json();
    console.log(jsonResponse);

    for (let i = 0; i < jsonResponse.length; i++) {
      // console.log(jsonResponse[i].title);
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

//getComments(`${url}/api/v1/social/posts/?_author=true`, postBody)
getSuggestionFeed(`${url}/api/v1/social/posts/?_author=true`, postBody);
getFeedPosts(`${url}/api/v1/social/posts/?_author=true&_reactions=true&_comments=true`, postBody);
