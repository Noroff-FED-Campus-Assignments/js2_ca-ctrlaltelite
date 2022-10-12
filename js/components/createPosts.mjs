export function createPosts(container, post, userAvatar, userName) {
  const html = (container.innerHTML += `
    <div class="userPost flex flex-col border mb-5 rounded-sm p-2">
    <div class="flex">
        <img src="${userAvatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
        <p class="ml-2">${userName}</p>
    </div>
    
    <div class="mb-4 mt-3">
        <h2 class="">${post.title}<h2>
        <img src="${post.media}">
        <p>${post.body}</p>
    </div>
    <div>
        <p class="mb-4">Reactions</p>
        <a class="bg-mainBlue text-fontWhite" href="./../../specificPost.html?id=${post.id}">Veiw post</a>
    </div>
    
    `);

  return html;
}
