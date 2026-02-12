const yesBtn = document.querySelectorAll(".content_btn")[0];
const noBtn = document.querySelector(".no_btn");
const gifImg = document.querySelector(".content_gif img");
const text = document.querySelector(".content_text");
const btnsWrapper = document.querySelector(".content_btns");

const gifs = ["./assets/img/spang.gif", "./assets/img/cat.gif", "./assets/img/cat-2.gif"];

const texts = ["Ты точно уверена? 🥺", "Подумай еще раз... 😿", "Может все же согласишься? 😭"];

let currentIndex = 0;
let btnScale = 1;

const preloadedGifs = gifs.map((src) => {
  const img = new Image();
  img.src = src;
  return img;
});

noBtn.addEventListener("click", () => {
  gifImg.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % gifs.length;

    gifImg.src = "";
    requestAnimationFrame(() => {
      gifImg.src = preloadedGifs[currentIndex].src;

      text.textContent = texts[currentIndex];

      requestAnimationFrame(() => {
        gifImg.style.opacity = 1;
        text.style.opacity = 1;
      });
    });

    btnScale -= 0.2;
    if (btnScale < 0.2) btnScale = 0.2;
    noBtn.style.transform = `scale(${btnScale})`;
  }, 300);
});

yesBtn.addEventListener("click", () => {
  gifImg.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    gifImg.src = "";

    requestAnimationFrame(() => {
      gifImg.src = "./assets/img/final.gif";
      text.textContent = "Спасибоооо) Что на счет свидания?";
      text.style.color = "#ff4d6d";

      requestAnimationFrame(() => {
        gifImg.style.opacity = 1;
        text.style.opacity = 1;
      });
    });

    btnsWrapper.style.display = "none";
  }, 300);
});
