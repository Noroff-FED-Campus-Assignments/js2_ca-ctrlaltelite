const title = document.querySelector(".postTitle");
const body = document.querySelector(".postContent");

async function addPost(event) {
  event.preventDefault();

  const requiredTitle = document.querySelector(".required-title");
  const requiredBody = document.querySelector(".required-text");

  if (title.value.length > 1 && body.value.length > 1) {
    const response = await fetch("https://nf-api.onrender.com/api/v1/social/posts", {
      method: "POST",
      body: JSON.stringify({
        title: `${title.value}`,
        body: `${body.value}`,
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    title.value = "";
    body.value = "";
    requiredTitle.classList.add("hidden");
    requiredBody.classList.add("hidden");
  } else {
    requiredTitle.classList.remove("hidden");
    requiredBody.classList.remove("hidden");
  }
}

const postBtn = document.querySelector("#postBtn");

postBtn.addEventListener("click", addPost);
