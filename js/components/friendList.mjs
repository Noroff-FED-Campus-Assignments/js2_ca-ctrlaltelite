export function listOfFriends(friend, container) {
  for (let i = 0; i < friend.length; i++) {
    if (i <= 3) {
      container.innerHTML += `
         <div class="flex items-center mb-2 mt-2 ml-2">
         <img src="${friend[i].avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
         <p class="ml-2 text-sm">${friend[i].name}</p>
         </div>
         `;
    }
  }
}
