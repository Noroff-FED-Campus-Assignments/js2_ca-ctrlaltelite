"use strict"

const accessToken = localStorage.getItem("accessToken");

export async function unfollow(url) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          const jsonResponse = await response.json();
          console.log(jsonResponse);

    } catch (error) {
      console.log(error);
    }
}

