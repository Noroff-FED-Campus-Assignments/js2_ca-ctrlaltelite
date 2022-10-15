"use strict"
const queryString = window.location.search;
const queryParams = new URLSearchParams(queryString);
const userName = queryParams.get("name");


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

          return jsonResponse;
    } catch (error) {
      console.log(error);
    }
}

