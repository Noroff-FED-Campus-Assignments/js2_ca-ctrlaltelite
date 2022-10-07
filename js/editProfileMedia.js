async function updateMedia(event) {
  event.preventDefault();

  const user = localStorage.getItem("userName");
  const token = localStorage.getItem("accessToken");

  const avatarInput = document.querySelector(".avatar-url");
  const bannerInput = document.querySelector(".banner-url");

  const response = await fetch("https://nf-api.onrender.com/api/v1/social/profiles/jowander/media", {
    method: "PUT",
    body: JSON.stringify({
      banner: `${bannerInput.value}`,
      avatar: `${avatarInput.value}`,
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  location.reload();
}

const form = document.querySelector("#profile-media-form");
form.addEventListener("submit", updateMedia);

// // if valuen i ett av feltene er større enn 1, aktiver save, fiks kryss i hjørnet
// // trykke utenfor modalen cancel
