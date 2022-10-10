import { authHeader } from "./components/authHeader.mjs";
import { createPosts } from "./components/createPosts.mjs";
import { userInfo } from "./components/profileInfo.mjs";

const token = localStorage.getItem("accessToken");
const baseURL = "https://nf-api.onrender.com/api/v1/social/profiles/";
const user = localStorage.getItem("userName");
const parameters = `?_followers=true&_following=true&_posts=true`;

async function getContent() {
  const url = `${baseURL}${user}${parameters}`;

  const response = await fetch(url, authHeader(token), {
    method: "GET",
  });

  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  }
}

const { name, avatar, banner, following, posts } = await getContent();

// Populerer siden med brukerinfo fra innlogget bruker
const profileBannerContainer = document.querySelector(".profile-banner-container");
const profileImgContainer = document.querySelector(".profile-img-container");
const profileNameContainer = document.querySelector(".profile-name-container");
const userInfoName = document.querySelector(".user-info-name");

userInfo(profileBannerContainer, profileImgContainer, profileNameContainer, userInfoName, banner, avatar, name);

// Populerer siden med info om followers.

function listOfFriends() {
  for (let i = 0; i < following.length; i++) {
    if (i <= 3) {
      document.querySelector(".user-followers-container").innerHTML += `
       <div class="flex items-center mb-2 mt-2 ml-2">
       <img src="${following[i].avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
       <p class="ml-2 text-sm">${following[i].name}</p>
       </div>
       `;
    }
  }
}

listOfFriends();

function addPosts() {
  const filteredPosts = posts.filter((post) => {
    if (post.title === "string" || post.body === "string" || !post.title || !post.body) {
    } else {
      return post;
    }
  });

  for (let i = 0; i < filteredPosts.length; i++) {
    const userPosts = filteredPosts[i];
    const container = document.querySelector(".user-posts");

    createPosts(container, userPosts, avatar, name);
  }
}

addPosts();
