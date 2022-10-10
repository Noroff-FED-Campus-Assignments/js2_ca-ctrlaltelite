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
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, headers);
        // console.log(response);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);

        for (let i = 0; i < jsonResponse.length; i++) {
            // console.log(jsonResponse[i].author);
            if (i === 3) {
                break;
            }
            const profileContainer = jsonResponse[i].author;
            // console.log(profileContainer);
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