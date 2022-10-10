import { createPosts } from "./components/createPosts.mjs";

async function addComment(postID) {
  const baseURL = "https://nf-api.onrender.com/api/v1/social/posts/";
  const url = `${baseURL}${postID}/comment`;
  const token = localStorage.getItem("accessToken");
  const user = localStorage.getItem("userName");

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      body: "Mø :)",
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  console.log(json);
}
