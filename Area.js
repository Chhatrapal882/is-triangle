const inputVal = document.querySelectorAll('.input-value')
const submitBtn = document.querySelector('#checktriangeBtn')
const result = document.querySelector('#output')

const calculateAreavalues = (side1, side2 ) => {
    const total = side1 * side2 
    return total
}
const calculateValue = () => {
    const value = calculateAreavalues(Number(inputVal[0].value), Number(inputVal[1].value))
    console.log(value);
    const finalVal = value/2
    console.log(finalVal);
    output.innerText =`your area of triangle is ${finalVal}`
}

submitBtn.addEventListener('click', calculateValue)