"use strict";
const userInformation = document.querySelector("#user-info");

const url = "https://nf-api.onrender.com";

const user = localStorage.getItem("userName");

const accessToken = localStorage.getItem("accessToken");
const headers = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

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


insertUserInformation(`${url}/api/v1/social/profiles/${user}`);
