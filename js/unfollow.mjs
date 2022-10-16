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

    } catch (error) {
      console.log(error);
    }
}

