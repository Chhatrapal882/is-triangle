const inputVal = document.querySelectorAll('.input-value')
const checktriangeBtn = document.querySelector('#checktriangeBtn')
const result = document.querySelector('#output')

const checkForTriangle = (angle1, angle2, angle3) => {
    const total = angle1 + angle2 + angle3
    return total
}
const calculateValue = () => {
    const value = checkForTriangle(Number(inputVal[0].value), Number(inputVal[1].value), Number(inputVal[2].value))
    console.log(value);
    if(value === 180){
        result.innerText = "It is right Triangle"
    }
    else{
        result.innerText = "It is not Triangle"
    }
}

checktriangeBtn.addEventListener('click', calculateValue)