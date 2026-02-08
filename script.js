// Get DOM Elements
const modal = document.querySelector("#simpleModal");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".closeBtn");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Function open modal
function openModal() {
  modal.style.display = "block";
}

// Function close modal with X
function closeModal() {
  modal.style.display = "none";
}

// Function close modal when click outside modal
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
