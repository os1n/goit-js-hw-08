"use strict";

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

//     Категория: Животные
//     Количество элементов: 4
console.log("Task 01");

const ulRef = document.querySelector("#categories");
const itemRef = document.querySelectorAll(".item");

console.log(`В списке ${ulRef.children.length} категорий`);

//console.log("itemRef:", itemRef);

itemRef.forEach((element) => {
  console.log(
    `В категории: ${element.children[0].textContent}, есть ${element.children[1].children.length} элемента(ов)`
  );
});
