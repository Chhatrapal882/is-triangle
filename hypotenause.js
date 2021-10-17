const inputVal = document.querySelectorAll('.input-value')
const submitBtn = document.querySelector('#checktriangeBtn')
const result = document.querySelector('#output')

const calculateHypotenous = (side1, side2 ) => {
    const total = (side1*side1) + (side2*side2) 
    return total
}
const calculateValue = () => {
    const value = calculateHypotenous(Number(inputVal[0].value), Number(inputVal[1].value))
    console.log(value);
    const finalVal = Math.sqrt(value)
    console.log(finalVal);
    output.innerText =`your hypotenause value is ${finalVal}`
}

submitBtn.addEventListener('click', calculateValue)