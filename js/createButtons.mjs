function createButtons(userName) {
    if (userName === userName) {
        return btnHtml = `
        <div>
            <button class="bg-mainBlue">Update</button>
            <button class="bg-red-500">Delete</button>
        </div>`;
    }
    return btnHtml;
}