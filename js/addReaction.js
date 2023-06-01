import { getLocalStorage } from "./components/getLocalStorage.mjs";
const { accessToken } = getLocalStorage();

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const postID = params.get("id");

const likeBtn = document.querySelector(".likeBtn");

async function addLikes() {
  try {
    const response = await fetch(`https://nf-api.onrender.com/api/v1/social/posts/${postID}/react/👍`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const json = await response.json();

    document.querySelector(".likes-count").innerHTML = json.count;
  } catch (error) {
    console.log(error);
  }

}

likeBtn.addEventListener("click", addLikes);
