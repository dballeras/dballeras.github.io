const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Agpayso ngata ata feelings mo bess, baka ine eme eme mo Iang ako HAHAHA. Joke lang, mwa mwa ka sa'kin 😚";
  gif.src =
    "https://media4.giphy.com/media/4QPxF8ihM8VuvOW7Lq/giphy.gif?cid=6c09b952ts1g87vhi64slsw4wd5k6hwx8u8x1mlqhsc4qkxe&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
