// Birthday Surprise Logic
const startBtn = document.getElementById("startBtn");
const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");
const nextBtn = document.getElementById("nextBtn");
const pages = document.querySelectorAll(".page");
const bdayMusic = document.getElementById("bdayMusic");

let currentPage = 0;

startBtn.addEventListener("click", () => {
  introScreen.classList.add("fade-out");
  setTimeout(() => {
    introScreen.style.display = "none";
    mainContent.classList.remove("hidden");
    bdayMusic.play().catch(() => console.log("Autoplay blocked"));
  }, 1000);
});

nextBtn.addEventListener("click", () => {
  pages[currentPage].classList.remove("active");
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Typewriter for letter
const letterText = document.getElementById("letterText");
const message = `Brinda Makhecha 💖 happy bday 🎉 and thank you so much mari life ma unexpectedly entry karva mate...
(mane aevu lagtu k ek manas na java thi mari life stop thay gay che aem but aevu nathi hotu ae te mane sikhvadyu 🌸
mari life ma replacement to nai but ae divase ek navi ane special place bani gai mari life ma tara mate 💕
ek nava character ni entry je bov special and important bani gyu mara mate 😚
jeni sathe hu bov jaldi attach thay and ae attachment jena mate kyare mare regreate nai karvu pade 😂💞)`;

let i = 0;
function typeWriter() {
  if (i < message.length) {
    letterText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
window.addEventListener("load", () => {
  setTimeout(typeWriter, 2000);
});

