"use strict"
const queryString = window.location.search;
const queryParams = new URLSearchParams(queryString);
const userName = queryParams.get("name");

const followUrl = `https://nf-api.onrender.com/api/v1/social/profiles/${userName}`;
//const urlParams = "/follow?_followers=true&_following=true&_posts=true";


const accessToken = localStorage.getItem("accessToken");

export async function follow(url) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const jsonResponse = await response.json();


        //   console.log(jsonResponse[0]._count.followers);
        //   console.log(jsonResponse[0]._count.following);

          for(let i = 0; i < jsonResponse.length; i++) {
            // console.log(jsonResponse[i]._count.followers);
            // console.log(jsonResponse[i]._count.following);
          }



          return jsonResponse;
    } catch (error) {
      console.log(error);
    }
}

