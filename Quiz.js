    const quizform = document.querySelector('.form-quiz')
    const submitBtn = document.querySelector('#submitBtn')
    const result = document.querySelector('#output')
    const correctAnswer = ["90°", "right angled"]
    const calculateScore = () => {
        let score = 0
        let index = 0
        const formResult = new FormData(quizform)
        console.log(formResult);
        for (let value of formResult.values()) {
            if (value === correctAnswer[index]) {
                console.log(value);
                score = score + 1
            }
            index = index + 1
        }
        result.innerText = `your score is ${score}`

    }


    submitBtn.addEventListener('click', calculateScore)