const counterValue = document.querySelector('#value');
console.log(counterValue.textContent);

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

let counter = 0;

const OnClickPlus =()=> {
    counter +=1
    counterValue.textContent = counter;
   
};

const OnClickMinus =()=>{
    counter -=1
    counterValue.textContent = counter;
    console.log(counter);
}


decrementBtn.addEventListener('click', OnClickMinus)
incrementBtn.addEventListener('click', OnClickPlus)

