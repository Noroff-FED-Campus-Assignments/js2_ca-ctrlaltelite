"use strict"
const userAvatarNav = document.querySelector(".user-avatar-nav");
console.log(userAvatarNav)

async function insertUserAvatar(url) {
    try {
      const response = await fetch(url, headers);
      const jsonResponse = await response.json();

  
      userAvatarNav.innerHTML = `<div class="flex items-center ml-4 mr-4">
                                          <div class="profile-name text-xs mr-5">
                                          <h2 class="text-md text-right">${jsonResponse.name}</h2>
                                          <h6 class="text-xs text-right">Online</h6>
                                      </div>
                                      <img src="${jsonResponse.avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full alt="Profile img" class="w-8 h-8 rounded-full" />`;
    } catch (error) {
      console.log(error);
    }
  }
  
  insertUserAvatar(`${url}/api/v1/social/profiles/${user}`);