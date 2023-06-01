const profileImgContainer = document.querySelector("#profile-info");
const editMediaBtn = document.querySelector(".edit-profile-media-btn");
const modal = document.querySelector(".edit-profile-modal");
const exitBtn = document.querySelector(".exit-btn");

profileImgContainer.addEventListener("mouseover", () => {
  editMediaBtn.classList.remove("hidden");
});

profileImgContainer.addEventListener("mouseout", () => {
  editMediaBtn.classList.add("hidden");
});

editMediaBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.querySelector("body").style.overflow = "hidden";
});

exitBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.querySelector("body").style.overflow = "visible";
});
