const input = document.querySelector('#validation-input');

const inputLength = ()=> {
 console.log(input.value.length); 
 console.log(input.dataset.length);  

if (Number(input.dataset.length) === input.value.length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
}
else{
    input.classList.remove('valid');
    input.classList.add('invalid');
}
}
input.addEventListener('blur', inputLength)
