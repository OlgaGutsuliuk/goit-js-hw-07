//Порахувала к-ть li.item
const allLi = document.querySelectorAll('li.item')
console.log(`В списке ${allLi.length} категории`);

// Вивести текст заголовку і порахувати вкладені li
allLi.forEach(el =>{
    console.log(el.querySelector('h2').textContent);
    console.log(el.querySelectorAll('li').length); 
})
















































