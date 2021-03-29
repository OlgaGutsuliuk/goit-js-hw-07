const boxes = document.querySelector('#boxes')
const createBtn = document.querySelector('[data-action="render"]')
const clearBtn = document.querySelector('[data-action ="destroy"]')
const input = document.querySelector("#controls>input")

const randomColor =()=>{
  return `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`  
}
const defaultSize = 30;
const createBoxes =(amount)=>{
    destroyBoxes();
for (let i=0; i<amount; i+=1 ){
    const markup = document.createElement('div');
    const size = defaultSize + i*10
    const color = randomColor();
    markup.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color}`
    boxes.appendChild(markup);
}
}
createBtn.addEventListener('click', ()=> createBoxes(+input.value));

//Функция которая очищает div#boxes
const destroyBoxes = ()=> {
 boxes.innerHTML = ""
}
clearBtn.addEventListener('click', destroyBoxes)



