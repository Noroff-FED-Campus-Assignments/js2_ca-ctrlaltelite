import { getBaseURL } from "./components/baseURL.mjs";
import { getLocalStorage } from "./components/getLocalStorage.mjs";

const { accessToken } = getLocalStorage();
console.log(accessToken);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postID = params.get("id");

const baseUrl = getBaseURL();
const endpoint = `${baseUrl}posts/${postID}?_comments=true`;

console.log(endpoint);

async function showComments() {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json.comments);

    for (let i = 0; i < json.comments.length; i++) {
      console.log(json.comments[i]);

      const commentsContainer = document.querySelector(".show-comments-container");
      showCommentsHTML(commentsContainer, json.comments[i]);
    }
  } catch (error) {}
}

showComments();

async function showCommentsHTML(container, post) {
  const html = (container.innerHTML += `
  <div class="comment-container border p-2 mb-8">
  <h2 class="font-headers text-lg">${post.owner}</h2>
  <hr class="mb-5">
  <p class="mb-2">${post.body}</p>
  </div>`);
}
