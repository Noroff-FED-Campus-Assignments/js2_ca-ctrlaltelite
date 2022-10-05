"use strict"
const userInformation = document.querySelector("#user-info");
const userAvatar = document.querySelector("#user-avatar");

async function insertUserInformation(url, data) {
    try {
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, headers);
        const jsonResponse = await response.json();

        const profileContainer = jsonResponse;
        console.log(profileContainer);
        userInformation.innerHTML =  `<li><p>Name: ${profileContainer.name}</p></li>
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
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, headers);
        const jsonResponse = await response.json();

        const profileContainer = jsonResponse;
        console.log(profileContainer);
        userAvatar.innerHTML =  `<div class="space-y-4 h-full w-full border bg-mainBlue">
                                    <div class="flex m-4">
                                        <img src="${jsonResponse.avatar}" onerror="this.src = '/img/userPlacegolder.png';" class="w-8 h-8 rounded-full">
                                        <input class="w-3/4 h-8 mx-auto self-center border border-mainBlue" placeholder="Write something" type="text">
                                    </div>
                                    <div class="flex justify-end mx-4 py-5">
                                        <button class="bg-mainGray w-1/4 h-8">Comment</button>
                                    </div>
                                </div>`;
        

    } catch (error) {
        console.log(error);
    }    
}

insertUserAvatar(`${url}/api/v1/social/profiles/jowander`, postBody)
insertUserInformation(`${url}/api/v1/social/profiles/jowander`, postBody);
