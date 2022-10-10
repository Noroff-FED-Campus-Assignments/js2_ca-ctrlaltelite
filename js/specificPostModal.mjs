"use strict"

const modalForm = document.querySelector(".modalContainer");



const putBody = {
    title: "",
    body: "",
    tags: [""],
    media: ""
};

// async function getSpecificPost() {
//     try {
//         const putData = {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         };
        
//         const response = await fetch(url, headers);
//         const jsonResponse = await response.json();
        
//     } catch (error) {
//         console.log(error);
//     } finally {

//     }
// }

export async function displayPostForm(url, data) {
    try {
        const putData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
    
        const response = await fetch(url, headers);
        const jsonResponse = await response.json();
        // console.log(jsonResponse);
            // console.log(jsonResponse[i])
            modalForm.innerHTML = `<div class="thisPost space-y-4 h-100 w-100 mb-8 border bg-fontWhite">
            <div class="flex m-4">
                <img
                    src="${jsonResponse.author.avatar}"
                    class="w-8 h-8 rounded-full"
                    alt="Profile picture"
                    onerror="this.src = '/img/userPlacegolder.png';"
                />
                <h3 class="m-4 text-center">${jsonResponse.author.name}</h3>
            </div>
            <div class="mx-4"">${jsonResponse.title}
                <img
                class="" 
                src="${jsonResponse.media}" />
                <p>${jsonResponse.body}</p>
                <hr class="mx-4">
            </div>
            <div class="mx-4 py-5">
                <form>
                    <p>Required title</p>
                    <input id="required-title" class="w-3/4 h-8 border border-mainBlue placeholder="Write something" type="text">
                    <p>Required body</p>
                    <input id="required-body" class="w-3/4 h-8 border border-mainBlue placeholder="Write something" type="text">
                    <p>Required tags</p>
                    <input id="required-tags" class="w-3/4 h-8 border border-mainBlue placeholder="Write something" type="text">
                    <p>Required media</p>
                    <input id="required-media" class="w-3/4 h-8 border border-mainBlue placeholder="Write something" type="text">
                    <a id="${jsonResponse.id}" class="bg-mainBlue text-white w-1/4 updatePost">Update</a>
                    <a id="${jsonResponse.id}" class="bg-mainBlue w-1/4 deletePostBtn">Delete</a>
                    <a class="bg-red-500 w-1/4 closeModal">Cancel</a>
                </form>
            </div>
        </div>`;
    } catch (error) {
        console.log(error);
    } finally {
        const updatePost = document.querySelector(".updatePost");
        const deletePost = document.querySelector(".deletePostBtn");
        const closeModal = document.querySelector(".closeModal");
        console.log(deletePost);
        updatePost.addEventListener("click", () => {
            const postId = event.target.id;
            console.log(postId);
        });
        deletePost.addEventListener("click", () => {
            const postId = event.target.id;
            console.log(postId);
        });
        closeModal.addEventListener("click", () => {
            
        });

    }
}



