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

const { name, avatar, banner, following, posts } = await getContent();

// Populerer siden med brukerinfo fra innlogget bruker

function userInfo() {
  document.querySelector(".profile-banner-container").innerHTML = `
 <img class="h-20 w-full rounded-t-sm" src="${banner}" onerror="this.src = '/img/placeholder-banner.jpeg';">`;
  document.querySelector(".profile-img-container").innerHTML = `<img class="w-32 h-32 rounded-full" src="${avatar}" onerror="this.src = '/img/userPlacegolder.png';">`;
  document.querySelector(".profile-name-container").innerHTML = `<h2 class="text-fontWhite text-lg mt-4">${name}</h2>`;
  document.querySelector(".user-info-name").innerHTML = `${name}`;
}

userInfo();

// Populerer siden med info om followers.

function listOfFriends() {
  for (let i = 0; i < following.length; i++) {
    if (i <= 3) {
      document.querySelector(".user-followers-container").innerHTML += `
       <div class="flex items-center mb-2 mt-2 ml-2">
       <img src="${following[i].avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
       <p class="ml-2 text-sm">${following[i].name}</p>
       </div>
       `;
    }
  }
}

listOfFriends();

// Populerer siden med brukerens poster. Det går an at brukeren har
// tomme poster, eller poster med "string", så jeg filtrerer bort disse

// const mapped = posts.map((item) => {
//   const container = item.title;

//   return container;
// });

// console.log(mapped);

function addPosts() {
  const filteredPosts = posts.filter((post) => {
    if (post.title === "string" || post.body === "string" || !post.title || !post.body) {
    } else {
      return post;
    }
  });

  for (let i = 0; i < filteredPosts.length; i++) {
    const userPosts = filteredPosts[i];
    document.querySelector(".user-posts").innerHTML += `
    <div class="userPost flex flex-col border mb-5 rounded-sm p-2">
    <div class="flex">
        <img src="${avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
        <p class="ml-2">${user}</p>
    </div>
    
    <div class="mb-4 mt-3">
        <h2 class="">${userPosts.title}<h2>
        <img src="${userPosts.media}">
        <p>${userPosts.body}</p>
    </div>
    <div>
        <p class="mb-4">Reactions</p>
        <div class="flex w-full ">
            <input class="border rounded-sm w-full p-1 text-sm" placeholder="Write something" type="text">
            <button class="bg-mainBlue rounded-sm w-1/4 text-white">Comment</button>
        </div>
</div>
    
    `;
  }
}

addPosts();
