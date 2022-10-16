"use strict";

import { createPosts } from "./components/createPosts.mjs";

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

async function getFeedPosts(url) {
  try {
    const response = await fetch(url, headers);

    const jsonResponse = await response.json();

    for (let i = 0; i < jsonResponse.length; i++) {
      const postInformation = jsonResponse[i];


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
      createPosts(suggestionFeed, jsonResponse[i], jsonResponse[i].author.avatar, jsonResponse[i].author.name);
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
