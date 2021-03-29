const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ulIngredients = document.querySelector('#ingredients');
const array = ingredients.map(el => {
const liIngredients = document.createElement('li');
liIngredients.textContent = el; 
 return liIngredients
 })
ulIngredients.append(...array)