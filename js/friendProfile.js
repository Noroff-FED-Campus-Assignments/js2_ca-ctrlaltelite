"use strict"
const url = "https://nf-api.onrender.com";
const profileFriendsContainer = document.querySelector("#profile-picture");

const accessToken = localStorage.getItem("accessToken");
const headers = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
};

const postBody = {
    "title": "",
    "body": ""
}

async function insertProfilePicture(url, data) {
    try {

        const response = await fetch(url, headers);
        const jsonResponse = await response.json();


        for (let i = 0; i < jsonResponse.length; i++) {
            if (i === 3) {
                break;
            }
            const profileContainer = jsonResponse[i].author;

            profileFriendsContainer.innerHTML +=  `<li>
                                                        <div class="flex items-center mb-2">
                                                            <img src="${profileContainer.avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
                                                            <p class="ml-2">${profileContainer.name}</p>
                                                        </div>
                                                    </li>`;
        }

    } catch (error) {
        console.log(error);
    }    
}



insertProfilePicture(`${url}/api/v1/social/posts/?_author=true`, postBody);