import { listOfFriends } from "./components/friendList.mjs";
import { getLocalStorage } from "./components/getLocalStorage.mjs";

const searchBarInput = document.querySelector(".search-bar");
const { accessToken, userName } = getLocalStorage();

async function getProfiles() {
  const inputFromSearch = searchBarInput.value;
  const postContainer = document.querySelector("#post-section");

  try {
    const response = await fetch("https://nf-api.onrender.com/api/v1/social/profiles?limit=1000", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    postContainer.innerHTML = "";

    for (let i = 0; i < json.length; i++) {
      const profileNames = json[i].name.toLowerCase();

      const inputFiltered = inputFromSearch.trim().toLowerCase();

      if (profileNames.includes(inputFiltered)) {
        postContainer.innerHTML += `
        <div class="flex items-center mb-2 mt-2 ml-2">
        <img src="${json[i].avatar}" onerror="this.src = './img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
        <p class="ml-2 text-sm">${json[i].name}</p>
        </div>
        `;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

searchBarInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getProfiles();
  }
});
