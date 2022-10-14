import { createPosts } from "./components/createPosts.mjs";
import { getLocalStorage } from "./components/getLocalStorage.mjs";

const { accessToken, userName } = getLocalStorage();

const popularPostsBtn = document.querySelector(".popular");
const feedBtn = document.querySelector(".feed");

popularPostsBtn.addEventListener("click", filterByCommentCount);
const container = document.querySelector("#post-section");

async function filterByCommentCount() {
  popularPostsBtn.classList.add("text-mainGray");

  feedBtn.classList.remove("text-mainGray");
  feedBtn.classList.add("text-mainBlue");

  container.innerHTML = "";
  const response = await fetch("https://nf-api.onrender.com/api/v1/social/posts?limit=300&comments=true&_author=true", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  console.log(json);

  for (let i = 0; i < json.length; i++) {
    //setter limit på 2 likes, da det er få poster med mere likes
    if (json[i]._count.reactions >= 2) {
      console.log(console.log(json[i]));

      createPosts(container, json[i], json[i].author.avatar, json[i].author.name);
    } else {
    }
  }
}

feedBtn.addEventListener("click", getFeedPosts);

async function getFeedPosts() {
  const response = await fetch("https://nf-api.onrender.com/api/v1/social/posts/?_author=true&_reactions=true&_comments=true", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const json = await response.json();

  container.innerHTML = "";
  for (let i = 0; i < json.length; i++) {
    console.log(json[i]);

    createPosts(container, json[i], json[i].author.avatar, json[i].author.name);
  }
}
