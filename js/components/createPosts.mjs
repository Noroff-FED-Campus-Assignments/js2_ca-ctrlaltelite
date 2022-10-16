/**
 *
 * @param {*} container The container where you want to put your html
 * @param {*} post Usually the loop of your json object. Eg. json[i]
 * @param {*} userAvatar Usually json[i]author.avatar
 * @param {*} userName Usually json[i].author.name
 * @returns html
 */

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
        <a class="bg-mainBlue p-1 text-xs rounded-sm text-fontWhite" href="./../../specificPost.html?id=${post.id}&name=${userName}">View post</a>
    </div>
    
    `);

  return html;
}
