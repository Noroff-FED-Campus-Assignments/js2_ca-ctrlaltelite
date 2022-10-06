"use strict";
const userInformation = document.querySelector("#user-info");
const userAvatar = document.querySelector("#user-avatar");
const userAvatarNav = document.querySelector("#user-avatar-nav");

async function insertUserInformation(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, headers);
    const jsonResponse = await response.json();

    const profileContainer = jsonResponse;
    // console.log(profileContainer);
    userInformation.innerHTML = `<li><p>Name: ${profileContainer.name}</p></li>
                                        <li><p>Email: ${profileContainer.email}</p><li>
                                        <p>Lives: Stavanger, Norway</p></li></li>`;
  } catch (error) {
    console.log(error);
  }
}

async function insertUserAvatar(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, headers);
    const jsonResponse = await response.json();

    const profileContainer = jsonResponse;
    // console.log(profileContainer);
    userAvatar.innerHTML = `<div class="space-y-4 h-full w-full border bg-mainBlue">
                                    <div class="flex m-4">
                                        <img src="${jsonResponse.avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
                                        <input class="w-3/4 h-8 mx-auto self-center border border-mainBlue" placeholder="Write something" type="text">
                                    </div>
                                    <div class="flex justify-end mx-4 py-5">
                                        <button class="bg-mainGray w-1/4 h-8">Comment</button>
                                    </div>
                                </div>`;

    userAvatarNav.innerHTML = `<div class="flex items-center ml-4 mr-4">
                                        <div class="profile-name text-xs mr-5">
                                        <h2 class="text-md text-right">${profileContainer.name}</h2>
                                        <h6 class="text-xs text-right">Online</h6>
                                    </div>
                                    <img src="${jsonResponse.avatar}" alt="Profile img" class="w-8 h-8 rounded-full" />`;
  } catch (error) {
    console.log(error);
  }
}

insertUserAvatar(`${url}/api/v1/social/profiles/jowander`, postBody);
insertUserInformation(`${url}/api/v1/social/profiles/jowander`, postBody);
