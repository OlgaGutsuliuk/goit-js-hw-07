const nameSpan = document.querySelector('#name-output');
const nameImput = document.querySelector('#name-input')
const notName = 'незнакомец'
nameSpan.textContent = notName

const textInput = (e)=> {
if (e.target.value.length > 0){
    nameSpan.textContent = e.target.value; 
}
else {
    nameSpan.textContent = notName;
}
}
nameImput.addEventListener('input', textInput);

