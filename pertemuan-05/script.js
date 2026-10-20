const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
navToggle.addEventListener("click", () => {
  console.log("Tombol navigasi diklik.");
  navMenu.classList.toggle("nav-open");
});
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form dikirim.");
  
  if (namaInput.value.trim() === "") {
    formFeedback.textContent = "Nama tidak boleh kosong!";
  }
});
contactForm.addEventListener("input", () => {
  formFeedback.textContent = "";
});