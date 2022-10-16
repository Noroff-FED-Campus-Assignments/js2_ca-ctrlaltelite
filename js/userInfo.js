"use strict";
const userInformation = document.querySelector("#user-info");
const userAvatar = document.querySelector("#user-avatar");
const userAvatarNav = document.querySelector("#user-avatar-nav");
const user = localStorage.getItem("userName");

async function insertUserInformation(url) {
  try {
    const response = await fetch(url, headers);
    const jsonResponse = await response.json();

    document.querySelector(".profile-img-container").innerHTML = `<img src="${jsonResponse.avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="profile-img create-post-avatar w-8 h-8 rounded-full " alt="Profile picture">`;

    const profileContainer = jsonResponse;

    userInformation.innerHTML = `<li><p>Name: ${profileContainer.name}</p></li>
                                        <li><p>Email: ${profileContainer.email}</p><li>
                                        <p>Lives: Stavanger, Norway</p></li></li>`;
  } catch (error) {
    console.log(error);
  }
}

async function insertUserAvatar(url) {
  try {
    const response = await fetch(url, headers);
    const jsonResponse = await response.json();

    const profileContainer = jsonResponse;

    userAvatar.innerHTML = `<div class="space-y-4 h-full w-full border bg-mainBlue">
                              <div class="flex m-4">
                                <img src="${jsonResponse.avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
                                <input class="w-3/4 h-8 mx-auto self-center border border-mainBlue" placeholder="Write something" type="text">
                              </div>
                              <div class="flex justify-between mx-4 py-5">
                                <div>
                                  <svg class="w-8 h-8 fill-fontWhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="512" height="512">
                                    <g id="picture_attach_image_landscape" data-name="picture, attach, image, landscape">
                                      <path d="M28,19.959a1,1,0,0,0,1-1V6a3.0008,3.0008,0,0,0-3-3H6a2.9786,2.9786,0,0,0-2.1211.8789A3.02,3.02,0,0,0,3,6V20a1.0013,1.0013,0,0,0,1.7077.7064L10,15.4141l7.293,7.2929a1,1,0,0,0,1.414-1.414L17.4141,20,20,17.4141l7,7V26a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V24a1,1,0,0,0-2,0v2a2.9794,2.9794,0,0,0,.8789,2.1211A3.02,3.02,0,0,0,6,29H26a3.0008,3.0008,0,0,0,3-3V24a1.0133,1.0133,0,0,0-.2938-.7079L20.707,15.293a.9994.9994,0,0,0-1.414,0L16,18.5859,10.707,13.293a.9994.9994,0,0,0-1.414,0L5,17.5859V6A1,1,0,0,1,6,5H26a1,1,0,0,1,1,1V18.959A1,1,0,0,0,28,19.959Z" />
                                      <path d="M19,10a3,3,0,1,0,3-3A3.0033,3.0033,0,0,0,19,10Zm4,0a1,1,0,1,1-1-1A1.0013,1.0013,0,0,1,23,10Z" />
                                    </g>
                                  </svg>
                                </div>
                                <button class="bg-mainGray w-1/4 h-8 place-self-end">Comment</button>
                              </div>
                            </div>
                            `;

    userAvatarNav.innerHTML = `<div class="flex items-center ml-4 mr-4">
                                        <div class="profile-name text-xs mr-5">
                                        <h2 class="text-md text-right">${profileContainer.name}</h2>
                                        <h6 class="text-xs text-right">Online</h6>
                                    </div>
                                    <img src="${jsonResponse.avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full alt="Profile img" class="w-8 h-8 rounded-full" />`;
  } catch (error) {
    console.log(error);
  }
}

insertUserAvatar(`${url}/api/v1/social/profiles/${user}`, postBody);
insertUserInformation(`${url}/api/v1/social/profiles/${user}`, postBody);
