const fontSizeControl = document.querySelector('#font-size-control')
const refText = document.querySelector('#text')

refText.style.fontSize = '15px'
const fontSizeText = (e)=>{
    refText.style.fontSize = `${e.target.value}px`
}


fontSizeControl.addEventListener('input', fontSizeText)
