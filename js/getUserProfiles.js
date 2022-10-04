const token = localStorage.getItem("accessToken");

const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

console.log(token);

async function getUserProfiles() {
  try {
    const response = await fetch("https://nf-api.onrender.com/api/v1/social/profiles/", headers);
    const json = await response.json();
    let img = "/img/userPlacegolder.png";

    for (let i = 0; i < 4; i++) {
      if (json[i].avatar) {
        img = json[i].avatar;
      }

      listOfFriendsHTML(json[i], profileFriendsContainer, img);
    }
  } catch (error) {
    console.log(error);
  }
}

getUserProfiles();

const profileFriendsContainer = document.querySelector(".friends-container");

function listOfFriendsHTML(user, container, img) {
  container.innerHTML += `
  <div class="flex items-center mb-2">
  <img src="${img}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
  <p class="ml-2">${user.name}</p>
  </div>
  `;
}
