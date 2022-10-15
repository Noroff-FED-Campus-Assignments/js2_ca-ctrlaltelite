import { getBaseURL } from "./components/baseURL.mjs";
import { getLocalStorage } from "./components/getLocalStorage.mjs";

const { accessToken, userName } = getLocalStorage();

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const postID = params.get("id");
const commentForm = document.querySelector("#commentForm");

async function addComment(event) {
  event.preventDefault();

  const baseURL = getBaseURL();
  const url = `${baseURL}posts/${postID}/comment`;

  const commentInput = document.querySelector("#comment").value;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        body: `${commentInput}`,
      }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    console.log(json);

    location.reload();
  } catch (error) {
    console.log(error);
  }
}

commentForm.addEventListener("submit", addComment);
