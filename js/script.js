"use strict";

import galleryItems from "./gallery-items.js"; // eslint-disable-line

console.log(`HW-08 Task 01`);
//console.log(galleryItems);

const galleryRef = document.querySelector(".js-gallery");
const lightBoxRef = document.querySelector(".lightbox");

let currentImg = 0;
const itemsList = [];

// Number of elements

const insertItems = function (objects, list) {
  objects.forEach((element, i = 0) => {
    // !! create li-s and add them to the []
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    //li.textContent = element.description;

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = element.preview;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = element.preview;
    img.alt = element.description;
    img.dataset.source = element.original;
    img.dataset.index = i;
    //console.log(element.preview);

    a.appendChild(img);
    li.appendChild(a);

    //console.log(element);
    itemsList.push(li);
  });
  console.log(itemsList);
  // !! insert array to the ul
  list.append(...itemsList);
};

insertItems(galleryItems, galleryRef);

const galleryItemRef = document.querySelectorAll(".gallery__link");

//console.log("GalleryItem = ", galleryItemRef);
galleryRef.addEventListener("click", openModal);

// add modal window appearence function

const lightBoxImageRef = document.querySelector(".lightbox__image");

function openModal(event) {
  //console.log(event.target.dataset.index);
  currentImg = event.target.dataset.index;
  console.log(currentImg);
  event.preventDefault();
  lightBoxRef.classList.add("is-open");
  lightBoxImageRef.src = event.target.dataset.source;
  lightBoxImageRef.alt = event.target.alt;
}

const closeModalBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);

closeModalBtnRef.addEventListener("click", closeModal);

function closeModal() {
  lightBoxRef.classList.remove("is-open");
  lightBoxImageRef.src = "";
  lightBoxImageRef.alt = "";
}

const lightBoxContentRef = document.querySelector(".lightbox__content");
const lightBoxOverlayRef = document.querySelector(".lightbox__overlay");
//console.log(lightBoxOverlayRef);

lightBoxContentRef.addEventListener("click", lightBoxOverlayHandler);

function lightBoxOverlayHandler(event) {
  console.log(
    "event.Target === lightBoxImageRef",
    event.Target === lightBoxImageRef
  );
  if (event.target === event.currentTarget) {
    console.log("Need to close modal");
    closeModal();
  }
}

window.addEventListener("keydown", keyPressHandler);

function keyPressHandler(event) {
  console.log(event.key);
  if (event.key === "Escape") closeModal();

  if (event.key === "ArrowLeft") prevImage();

  if (event.key === "ArrowRight") nextImage();
}

function prevImage() {
  //console.log(itemsList[currentImg - 1].children[0].children[0]);
  console.log(currentImg);
  lightBoxImageRef.src =
    itemsList[currentImg - 1].children[0].children[0].dataset.source;
  lightBoxImageRef.alt = itemsList[currentImg - 1].children[0].children[0].alt;
  if (currentImg > 1) {
    currentImg -= 1;
  }
}

function nextImage() {
  lightBoxImageRef.src =
    itemsList[currentImg - 1].children[0].children[0].dataset.source;
  lightBoxImageRef.alt = itemsList[currentImg - 1].children[0].children[0].alt;
  console.log(currentImg);
  if (currentImg < itemsList.length - 1) {
    currentImg += 1;
  }
}

// DONE
// Реалізація делегування на галереї ul.js-gallery і отримання url великого зображення.
// Відкриття модального вікна при натисканні на елементі галереї.
// Підміна значення атрибута src елемента img.lightbox__image.
// Закриття модального вікна при натисканні на кнопку button[data-action="close-modal"].
// Очищення значення атрибута src елемента img.lightbox__image
// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

// TODO
// all done