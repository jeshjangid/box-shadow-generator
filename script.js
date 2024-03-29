let elem = document.getElementById('element');
let text = document.getElementById('text');
let inputs = document.querySelectorAll('.sliders input');
let main = document.getElementById('main');
let body = main.parentElement;
let root = document.querySelector(':root');
let btn = document.getElementById('btn');

inputs.forEach((inp) => inp.addEventListener('input', generateShadow))

function generateShadow(){
    let size = document.getElementById('size').value;
    let xShadow = document.getElementById('x-shadow').value;
    let yShadow = document.getElementById('y-shadow').value;
    let blurRadius = document.getElementById('blur-radius').value;
    let spreadRadius = document.getElementById('spread-radius').value;
    let borderRadius = document.getElementById('border-radius').value;
    let shadowColor = document.getElementById('shadow-color').value;
    let boxColor = document.getElementById('box-color').value;
    let shadowColorOpacity = document.getElementById('shadow-color-opacity').value;
    let shadowInset = document.getElementById('shadow-inset');

    let boxShadow = shadowInset.checked ? `inset ${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hextoRgba(shadowColor, shadowColorOpacity)}` : `${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hextoRgba(shadowColor, shadowColorOpacity)}`;
    console.log(boxShadow);
    elem.style.boxShadow = boxShadow;
    elem.style.borderRadius = `${borderRadius}px`;
    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
    main.style.borderRadius = `${borderRadius}px`;
    main.style.boxShadow = boxShadow;
    elem.style.background = boxColor;
    body.style.background = boxColor;
    root.style.setProperty('--rangeColor', `${boxColor}`);
    root.style.setProperty('--selectBg', `${shadowColor}80`);
    root.style.setProperty('--selectColor', `${boxColor}`);
    root.style.setProperty('--bgColor', `${boxColor}90`);
    root.style.setProperty('--bdrColor', boxColor);
    btn.style.setProperty('--bgCopy', `${boxColor}90`);
    text.textContent = `box-shadow: ${boxShadow}; \nborder-radius: ${borderRadius}px; \nheight: ${size}px; \nwidth: ${size}px;`
}

console.log(text);
btn.addEventListener('click', ()=>{
    btn.textContent = 'Copied'
    setTimeout(() => {
        btn.textContent = 'Copy'
    }, 1000);
})

// copy to generated text to clipboard
function copytext(){
    text.select()
    document.execCommand('copy')
}


// Converting Hex to Rgba
function hextoRgba(shadowColor, shadowColorOpacity){
    let r = parseInt(shadowColor.substr(1,2),16)
    let g = parseInt(shadowColor.substr(3,2),16)
    let b = parseInt(shadowColor.substr(5,2),16)
    return  `rgba(${r}, ${g}, ${b}, ${shadowColorOpacity})`
}

// call the generateShadow function on every page load
window.onload = generateShadow()