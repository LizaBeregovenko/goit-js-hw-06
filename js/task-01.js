// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента
//(тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesArray = [...totalCategories]
// .map(categories => `Category: ${categories.children[0].textContent}

// Elements: ${categories.children[1].textContent}`)
// .join("\n");
// console.log(categoriesArray);

const list = document.querySelectorAll('#categories>li');
const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}
    Elements: ${el.lastElementChild.children.length}`);
});
///
