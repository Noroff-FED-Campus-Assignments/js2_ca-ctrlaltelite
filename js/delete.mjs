"use strict"

const accessToken = localStorage.getItem("accessToken");

export async function deletePost(url, data) {
    try {
        const deleteBody = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(url, deleteBody);
        const jsonResponse = await response.json(data);

        if (jsonResponse === 204) {
            window.location.href = "./../profile.html";
        }

        console.log(jsonResponse);

    } catch (error) {
        console.log(error);
    }
}


