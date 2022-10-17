export function userInfo(bannerContainer, profileImgContainer, profileNameContainer, userInfoName, banner, avatar, name) {
  // Adds user info to the user-banner/hero on top of page
  bannerContainer.innerHTML = `<img class="h-20 w-full object-cover rounded-t-sm" src="${banner}" onerror="this.src = '/img/placeholder-banner.jpeg';">`;
  profileImgContainer.innerHTML = `<img class="w-32 h-32 rounded-full" src="${avatar}" onerror="this.src = '/img/userPlacegolder.png';">`;
  profileNameContainer.innerHTML = `<h2 class="text-fontWhite text-lg mt-4 font-headers">${name}</h2>`;

  //Adds user info to the user info box
  userInfoName.innerHTML = `${name}`;
}
