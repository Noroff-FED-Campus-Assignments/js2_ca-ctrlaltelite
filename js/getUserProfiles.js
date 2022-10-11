import { authHeader } from "./components/authHeader.mjs";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMwLCJuYW1lIjoic2lyaG95IiwiZW1haWwiOiJzaXJob3k1NjQ1MEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjUxMzkwODJ9.XdnKj0GL6ywTBDdjRK3JMelo--kSBC-37pmcLhZYiVA";

async function getUserProfiles() {
  try {
    const response = await fetch("https://nf-api.onrender.com/api/v1/social/profiles/", authHeader(token));
    const json = await response.json();
    console.log(json);
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
const feedFriendsContainer = document.querySelector(".feed-friends-container");

function listOfFriendsHTML(user, container, img) {
  container.innerHTML += `
  <div class="flex items-center mb-2">
  <img src="${img}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
  <p class="ml-2">${user.name}</p>
  </div>
  `;
}

listOfFriendsHTML;
