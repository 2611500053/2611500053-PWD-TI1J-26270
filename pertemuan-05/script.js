const namaInput = document.getElementById("nama");
const nama = namaInput.value;
const emailInput = document.getElementById("email");
const semesterInput = document.getElementById("semester");
const email = emailInput.value;
const semester = semesterInput.value;
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");
const contactForm = document.getElementById("contactForm");
navToggle.addEventListener("click", () => {
  console.log("Tombol navigasi diklik.");
  navMenu.classList.toggle("nav-open");
});
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
console.log("Form dikirim.");
});