"use strict"
const userInformation = document.querySelector("#user-info");

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
        console.log(response);
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        for (let i = 0; i < jsonResponse.length; i++) {
            console.log(jsonResponse[i].author);
            if (i === 3) {
                break;
            }
            const profileContainer = jsonResponse[i].author;
            console.log(profileContainer);
            userInformation.innerHTML =  `<li><p>Name: ${profileContainer.name}</p></li>
                                            <li><p>Email: ${profileContainer.email}</p><li>
                                            <p>Lives: Stavanger, Norway</p></li></li>`;
        }

    } catch (error) {
        console.log(error);
    }    
}

insertUserInformation(`${url}/api/v1/social/profiles`, postBody);