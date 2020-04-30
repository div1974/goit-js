import images from "./gallery-items.js";

const gal = document.querySelector(".js-gallery");
const mWin = document.querySelector(".js-lightbox");
// console.log(mWin);
const mImg = document.querySelector(".lightbox__image");
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]'
);
// console.log(closeModalBtn);
const ModalOverlay = document.querySelector(".lightbox__overlay");

const galItems = images.map((el) => buildImgItem(el));
gal.insertAdjacentHTML("beforeend", galItems.join(''));

function buildImgItem(item) {
  return `
<li class="gallery__item">
  <a
    class="gallery__link"
    href=${item.original}
  >
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</li>`;
}

gal.addEventListener("click", imgIncreaseModal);

function imgIncreaseModal(e) {
  e.preventDefault();

  mWin.classList.add("is-open");
  //   console.log(e.target.dataset.source);

  mImg.setAttribute("src", e.target.dataset.source);
  mImg.setAttribute("alt", e.target.alt);
}
closeModalBtn.addEventListener("click", imgCloseModal);
mWin.addEventListener("click", (e) => {
  if (e.target !== mImg) {
    imgCloseModal(e);
  } else return;
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    imgCloseModal(e);
  }
  if (e.keyCode === 37) {
    imgSlider(37);
  }
  if (e.keyCode === 39) {
    imgSlider(39);
  }
});

function imgCloseModal(e) {
  // console.log(ModalOverlay);
  //   console.log(e.keyCode);
  closeModalBtn.removeEventListener("click", imgCloseModal);
  //   ModalOverlay.removeEventListener("click", imgCloseModal);
  mImg.removeEventListener("click", imgCloseModal);
  document.removeEventListener("keydown", imgCloseModal);
  e.preventDefault();
  mWin.classList.remove("is-open");
  // console.log(e.target.dataset.source);
  mImg.setAttribute("src", "");
  mImg.setAttribute("alt", "");
  //   mImg.alt = gal.target.img.alt;
}

function imgSlider(keyPressed) {
  // console.log(keyPressed);
  let currentPictIdx = images.findIndex((e) => e.original === mImg.src);
  //   console.log(`сейчас индекс картинки ${currentPictIdx}`);
  if (keyPressed == 39) {
    currentPictIdx++;
  }
  if (keyPressed == 37) {
    currentPictIdx--;
  }
  if (currentPictIdx >= images.length) {
    currentPictIdx = 0;
  }
  if (currentPictIdx < 0) {
    currentPictIdx = images.length - 1;
  }
  //   console.log(`а теперь индекс такой ${currentPictIdx}`);
  mImg.src = images[currentPictIdx]["original"];
  mImg.alt = images[currentPictIdx]["description"];
}
