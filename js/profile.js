import { createPosts } from "./components/createPosts.mjs";
import { userInfo } from "./components/profileInfo.mjs";
import { getLocalStorage } from "./components/getLocalStorage.mjs";
import { listOfFriends } from "./components/friendList.mjs";

const baseURL = "https://nf-api.onrender.com/api/v1/social/profiles/";
const parameters = `?_followers=true&_following=true&_posts=true`;

const { accessToken, userName } = getLocalStorage();

async function getContent() {
  const url = `${baseURL}${userName}${parameters}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  }
}

const { name, avatar, banner, following, posts } = await getContent();

// Bruker funksjon fra userInfo.mjs for å populere siden med brukerinfo.
const profileBannerContainer = document.querySelector(".profile-banner-container");
const profileImgContainer = document.querySelector(".profile-img-container");
const profileNameContainer = document.querySelector(".profile-name-container");
const userInfoName = document.querySelector(".user-info-name");

userInfo(profileBannerContainer, profileImgContainer, profileNameContainer, userInfoName, banner, avatar, name);

// Populerer siden med info om followers.
const followersContainer = document.querySelector(".user-followers-container");
listOfFriends(following, followersContainer);

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
