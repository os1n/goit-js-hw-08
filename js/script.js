"use strict";

import galleryItems from "./gallery-items.js"; // eslint-disable-line

console.log(`HW-08 Task 01`);
//console.log(galleryItems);

const galleryRef = document.querySelector(".js-gallery");
const lightBoxRef = document.querySelector(".lightbox");
const lightBoxImageRef = document.querySelector(".lightbox__image");
const itemsList = [];
const closeModalBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]'
  );

let currentImg = 0;

closeModalBtnRef.addEventListener("click", closeModal);

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
  list.append(...itemsList);
};

insertItems(galleryItems, galleryRef);

galleryRef.addEventListener("click", openModal);


function openModal(event) {
  if (event.target.classList.contains("gallery__image")) {
    currentImg = parseInt(event.target.dataset.index);
    event.preventDefault();
    lightBoxRef.classList.add("is-open");
    lightBoxImageRef.src = event.target.dataset.source;
    lightBoxImageRef.alt = event.target.alt;
  }
}


function closeModal() {
  lightBoxRef.classList.remove("is-open");
  lightBoxImageRef.src = "";
  lightBoxImageRef.alt = "";
}

const lightBoxContentRef = document.querySelector(".lightbox__content");
const lightBoxOverlayRef = document.querySelector(".lightbox__overlay");

lightBoxContentRef.addEventListener("click", lightBoxOverlayHandler);

function lightBoxOverlayHandler(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

window.addEventListener("keydown", keyPressHandler);

function keyPressHandler(event) {
  //console.log(event.key);
  if (event.key === "Escape") closeModal();

  if (event.key === "ArrowLeft") prevImage();
  if (event.key === "ArrowRight") nextImage();
}

function prevImage() {
  if (currentImg > 0) {
    currentImg -= 1;
  }
  //console.log(galleryItems[currentImg].description);
  lightBoxImageRef.src = galleryItems[currentImg].original;
  lightBoxImageRef.alt = galleryItems[currentImg].description;
}

function nextImage() {
  //console.log(itemsList[currentImg - 1].children[0].children[0]);
  if (currentImg < itemsList.length - 1) {
    currentImg += 1;
    //console.log(galleryItems[currentImg].description);
    lightBoxImageRef.src = galleryItems[currentImg].original;
    lightBoxImageRef.alt = galleryItems[currentImg].description;
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
