const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const postID = params.get("id");
const commentForm = document.querySelector("#commentForm");
const commentBtn = document.querySelector(".commentBtn");

async function addComment(event) {
  event.preventDefault();

  const baseURL = "https://nf-api.onrender.com/api/v1/social/posts/";
  const url = `${baseURL}${postID}/comment`;
  const token = localStorage.getItem("accessToken");
  const user = localStorage.getItem("userName");
  const commentInput = document.querySelector("#comment").value;

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
}

commentForm.addEventListener("submit", addComment);
