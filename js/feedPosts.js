"use strict";
const url = "https://nf-api.onrender.com";

const feedContainer = document.querySelector("#post-section");
const suggestionFeed = document.querySelector("#suggestions-post");

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
    // console.log(response);
    const jsonResponse = await response.json();
    // console.log(jsonResponse);

    for (let i = 0; i < jsonResponse.length; i++) {
      // console.log(jsonResponse[i].body);
      if (i === 3) {
        break;
      }
      const postInformation = jsonResponse[i];

      feedContainer.innerHTML += `<div class="space-y-4 mb-8 w-full border border-mainBlue bg">
            <div class="flex m-4">
                <img
                    src="${postInformation.author.avatar}"
                    class="w-8 h-8 rounded-full"
                    alt="Profile picture"
                    onerror="this.src = '/img/userPlacegolder.png';"
                />
                <h3 class="m-4 text-center">${postInformation.author.name}</h3>
            </div>
                <div class="mx-4"">${postInformation.title}
                    <img src="${postInformation.media} onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full"/>
                    <p>${postInformation.body}</p>
                    <hr class="mx-4">
                </div>
            <div>
                <p class="mx-4">150K</p>
            </div>
            <div class="mx-4 py-5 hidden">
                <input class="w-3/4 h-8 border border-mainBlue placeholder="Write something" type="text">
                <button class="bg-mainBlue w-1/4 text-white">Comment</button>
            </div>
        </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getSugesstionFeed(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, headers);
    //console.log(response);
    const jsonResponse = await response.json();
    // console.log(jsonResponse);

    for (let i = 0; i < jsonResponse.length; i++) {
      // console.log(jsonResponse[i].body);
      if (i === 3) {
        break;
      }
      const postInformation = jsonResponse[i];
      suggestionFeed.innerHTML = `<div class="space-y-4 mb-8 w-full border border-mainBlue">
                                    <div class="flex m-4">
                                        <img
                                            src="${postInformation.author.avatar}"
                                            class="w-8 h-8 rounded-full"
                                            alt="Profile picture"
                                            onerror="this.src = '/img/userPlacegolder.png';"
                                        />
                                        <h3 class="m-4 text-center">${postInformation.author.name}</h3>
                                    </div>
                                        <div class="mx-4"">${postInformation.title}
                                            <img src="${postInformation.media}" />
                                            <p>${postInformation.body}</p>
                                            <hr class="mx-4">
                                        </div>
                                    <div>
                                        <p class="mx-4">150K</p>
                                    </div>
                                    <div class="mx-4 py-5 hidden">
                                        <input class="w-3/4 h-8 border border-mainBlue" placeholder="Write something" type="text">
                                        <button class="bg-mainBlack hidden w-1/4 text-white">Comment</button>
                                    </div>
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

getSugesstionFeed(`${url}/api/v1/social/posts/?_author=true`, postBody);
getFeedPosts(`${url}/api/v1/social/posts/?_author=true`, postBody);
