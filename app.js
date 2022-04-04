const mdoalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

mdoalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("open-modal");
});
closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
});
