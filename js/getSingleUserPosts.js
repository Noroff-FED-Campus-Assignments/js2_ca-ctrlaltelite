const singleUserPostsContainer = document.querySelector("#right-section");
const userName = localStorage.getItem("userName");

const url = `https://nf-api.onrender.com/api/v1/social/profiles/${userName}?_posts=true`;
async function getSingleUserPosts() {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const json = await response.json();

  jsonPosts = json.posts;

  for (let i = 0; i < jsonPosts.length; i++) {
    if (jsonPosts[i].title === "string" || jsonPosts[i].body === "string" || !jsonPosts[i].title || !jsonPosts[i].body) {
    } else {
      htmlUserPosts(document.querySelector(".user-posts"), jsonPosts[i], json);
    }
  }
}

getSingleUserPosts();

function htmlUserPosts(container, user, owner) {
  container.innerHTML += `
    <div class="userPost flex flex-col border mb-5 rounded-sm p-2">
        <div class="flex">
            <img src="${owner.avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
            <p class="ml-2">${owner.name}</p>
        </div>
        
        <div class="mb-4">
            <h2 class="">${user.title}<h2>
            <img src="${user.media}">
            <p>${user.body}</p>
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
