const startBtn = document.getElementById("startBtn");
const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");
const nextBtn = document.getElementById("nextBtn");
const pages = document.querySelectorAll(".page");
const bdayMusic = document.getElementById("bdayMusic");
const letterText = document.getElementById("letterText");

let currentPage = 0;

// start
startBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
  mainContent.classList.remove("hidden");
  bdayMusic.play().catch(()=>{});
  pages[currentPage].classList.add("active");
});

// next
nextBtn.addEventListener("click", () => {
  pages[currentPage].classList.remove("active");
  currentPage++;
  if (currentPage >= pages.length) currentPage = 0;
  pages[currentPage].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// typewriter
const message = `Brinda Makhecha 💖 happy bday 🎉 thank you so much mari life ma unexpectedly entry karva mate.
Tane khabar mane always aevu feel thay k main je prayers kari che ne mandir ma aena result ma tu mane mali chu.
Hu mari life na bov dark phase ma hati jyare tu aavi tyare ane pachi tu aai atle dhime dhime badhu sarkhu thava lagyu
and mari problems solve thava lagi 💪 and main tyare ek vastu belive kari k when the replacement from the god arrive you forgot what you have lost 💫
mane aevu lagtu k ek manas na java thi mari life stop thay gay che aem but aevu nathi hotu ae te mane sikhvadyu 🌸
mari life ma replacement to nai but ae divase ek navi ane special place bani gai mari life ma tara mate 💕
ek nava character ni entry je bov special and important bani gyu mara mate 😚
jeni sathe hu bov jaldi attach thay and ae attachment jena mate kyare mare regreate nai karvu pade i know
but as tame mane kyo cho k hu tanmara thi pan attach na thav aem to bhai mari life hoo mare attach thavu hoy to hu thav brbr...😂💞`;

let i=0;
function typeWriter() {
  if (i < message.length) {
    letterText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}
window.addEventListener("load", () => setTimeout(typeWriter, 3000));
