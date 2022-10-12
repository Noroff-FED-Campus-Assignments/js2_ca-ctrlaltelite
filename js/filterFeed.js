import { createPosts } from "./components/createPosts.mjs";

const popularPostsBtn = document.querySelector(".popular");
const feedBtn = document.querySelector(".feed");

popularPostsBtn.addEventListener("click", filterByCommentCount);

async function filterByCommentCount() {
  popularPostsBtn.classList.add("text-mainGray");

  feedBtn.classList.remove("text-mainGray");
  feedBtn.classList.add("text-mainBlue");

  const container = document.querySelector("#post-section");
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
    if (json[i]._count.reactions >= 6) {
      console.log(console.log(json[i]));

      createPosts(container, json[i], json[i].author.avatar, json[i].author.name);
    } else {
    }
  }
}

feedBtn.addEventListener("click", getFeedPosts());
