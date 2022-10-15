import { getLocalStorage } from "./components/getLocalStorage.mjs";

async function updateMedia(event) {
  event.preventDefault();

  const { accessToken, userName } = getLocalStorage();

  const avatarInput = document.querySelector(".avatar-url");
  const bannerInput = document.querySelector(".banner-url");

  try {
    const response = await fetch(`https://nf-api.onrender.com/api/v1/social/profiles/${userName}/media`, {
      method: "PUT",
      body: JSON.stringify({
        banner: `${bannerInput.value}`,
        avatar: `${avatarInput.value}`,
      }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });


    location.reload();
  } catch (error) {
    console.log(error);
  }
}

const form = document.querySelector("#profile-media-form");
form.addEventListener("submit", updateMedia);
