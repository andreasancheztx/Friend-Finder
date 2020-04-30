console.log("connected")
const questionsContainer = document.getElementById("questions")

const questions = ["I like something?", "I like to drive?"]

questions.forEach((question) => {
    const questionDiv = document.createElement("div")
    questionDiv.className += "col-3 offset-md-1"

    const questionP = document.createElement("p")
    questionP.textContent = question

    questionDiv.append(questionP)

    questionsContainer.append(questionDiv)


})