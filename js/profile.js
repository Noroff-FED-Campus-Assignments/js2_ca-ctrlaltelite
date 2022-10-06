import { authHeader } from "./components/authHeader.mjs";

const token = localStorage.getItem("accessToken");
const baseURL = "https://nf-api.onrender.com/api/v1/social/profiles/";
const user = localStorage.getItem("userName");
const parameters = `?_followers=true&_following=true&_posts=true`;

// Kaller apiet med et endepunkt som gir meg informasjon
// om brukeren som er logget inn.
// Brukerinfo, postene til brukeren, og følgere.

async function getContent() {
  const url = `${baseURL}${user}${parameters}`;

  const response = await fetch(url, authHeader(token), {
    method: "GET",
  });

  if (response.ok) {
    const json = await response.json();
    console.log(json);
    return json;
  }
}

const { name, avatar, banner, followers, posts } = await getContent();

// Populerer siden med brukerinfo fra innlogget bruker

function userInfo() {
  document.querySelector(".user-info-name").innerHTML = `${name}`;
  document.querySelector(".create-post-avatar").src = `${avatar}`;
  document.querySelector(".profile-banner").innerHTML = `
     <img src="${banner}"
     onerror="this.src = '/img/placeholder-banner.jpg';"
     class="rounded-t-lg"
     /> `;
  document.querySelector(".user-profile-info").innerHTML = `
     <img src="${avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="rounded-full w-5 h-5">
     <h1 class="text-fontWhite mt-3">${name}</h1>
     `;
}

// userInfo();

// Populerer siden med info om followers.

async function listOfFriends() {
  for (let i = 0; i < followers.length; i++) {
    if (i < 3) {
      document.querySelector(".friends-container").innerHTML += `
       <div class="flex items-center mb-2 bg-black">
       <img src="${followers[i].avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
       <p class="ml-2">${followers[i].name}</p>
       </div>
       `;
    }
  }
}

listOfFriends();

// Populerer siden med brukerens poster. Det går an at brukeren har
// tomme poster, eller poster med "string", så jeg filtrerer bort disse

document.querySelector("body").innerHTML = `<div class="bg-mainBlue">HEI</div>`;
