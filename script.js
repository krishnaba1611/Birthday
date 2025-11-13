const startBtn = document.getElementById("startBtn");
const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");
const nextBtn = document.getElementById("nextBtn");
const pages = document.querySelectorAll(".page");
const bdayMusic = document.getElementById("bdayMusic");
const letterText = document.getElementById("letterText");

let currentPage = 0;

// Start Button
startBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
  mainContent.classList.remove("hidden");
  pages[currentPage].classList.add("active");
  // Start music when user interacts
  bdayMusic.currentTime = 0;
  bdayMusic.play().catch(err => console.log("Autoplay blocked:", err));
});

// Next Button
nextBtn.addEventListener("click", () => {
  pages[currentPage].classList.remove("active");
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typewriter effect for Letter
const message = `Brinda Makhecha 💖 happy bday 🎉 and thank you so much mari life ma unexpectedly entry karva mate...
Tane khabar mane always aevu feel thay k main je prayers kari che ne mandir ma aena result ma tu mane mali chu...
You made my world brighter every single day 💕`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    letterText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}
window.addEventListener("load", () => setTimeout(typeWriter, 3000));
