import { getBaseURL } from "./components/baseURL.mjs";

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
        Authorization: `Bearer ${token}`,
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
