const allquestions = [
    {
        question: "If you invest Rs. 10,000 at an annual interest rate of 5%, how much interest will you earn in one year?",
        options: ["Rs. 250", "Rs. 500", "Rs. 750", "Rs. 1,000"],
        correctAnswer: "Rs. 500",
      },
      {
        question: "What is the total amount after investing Rs. 8,000 at an interest rate of 8% for 3 years?",
        options: ["Rs. 9,440", "Rs. 10,240", "Rs. 11,040", "Rs. 12,000"],
        correctAnswer: "Rs. 9,440",
      },
      {
        question: "If the interest rate is 6% and the principal amount is Rs. 15,000, what is the interest amount for one year?",
        options: ["Rs. 1,500", "Rs. 1,000", "Rs. 900", "Rs. 2,000"],
        correctAnswer: "Rs. 900",
      },
      {
        question: "How much should you invest at an annual interest rate of 4% to earn Rs. 800 in interest in one year?",
        options: ["Rs. 16,000", "Rs. 20,000", "Rs. 18,000", "Rs. 22,000"],
        correctAnswer: "Rs. 20,000",
      },
      {
        question: "If the principal is Rs. 12,000 and the interest rate is 10%, how much interest is earned in 2 years?",
        options: ["Rs. 2,400", "Rs. 1,200", "Rs. 2,000", "Rs. 3,000"],
        correctAnswer: "Rs. 2,400",
      },
      {
        question: "At what interest rate will Rs. 5,000 amount to Rs. 6,000 in 2 years?",
        options: ["5%", "6%", "7%", "8%"],
        correctAnswer: "6%",
      },
      {
        question: "If you borrow Rs. 8,000 at an interest rate of 7% for 4 years, how much will you repay in total?",
        options: ["Rs. 9,760", "Rs. 10,240", "Rs. 11,200", "Rs. 11,520"],
        correctAnswer: "Rs. 11,520",
      },
      {
        question: "What is the principal amount if the interest is Rs. 600 at an annual rate of 4% for 3 years?",
        options: ["Rs. 15,000", "Rs. 12,000", "Rs. 18,000", "Rs. 16,000"],
        correctAnswer: "Rs. 15,000",
      },
      {
        question: "If you invest Rs. 15,000 at an annual interest rate of 7%, how much will you have in 2 years?",
        options: ["Rs. 16,050", "Rs. 17,850", "Rs. 18,000", "Rs. 19,500"],
        correctAnswer: "Rs. 17,850",
      },
      {
        question: "What is the principal amount if the interest earned is Rs. 1,200 at an annual rate of 8% for 3 years?",
        options: ["Rs. 5,000", "Rs. 4,000", "Rs. 6,000", "Rs. 7,000"],
        correctAnswer: "Rs. 5,000",
      },
      {
        question: "If the interest rate is 12% and the total amount after 3 years is Rs. 24,000, what is the principal amount?",
        options: ["Rs. 16,000", "Rs. 20,000", "Rs. 22,000", "Rs. 18,000"],
        correctAnswer: "Rs. 18,000",
      },
      {
        question: "How much should be invested at an interest rate of 9% to earn Rs. 900 in interest in 1 year?",
        options: ["Rs. 10,000", "Rs. 9,000", "Rs. 8,000", "Rs. 7,000"],
        correctAnswer: "Rs. 10,000",
      },
      {
        question: "If you deposit Rs. 6,000 in a savings account that pays 4% interest, how much interest will you earn in 1 year?",
        options: ["Rs. 250", "Rs. 240", "Rs. 260", "Rs. 270"],
        correctAnswer: "Rs. 240",
      },
      {
        question: "What is the total amount after investing Rs. 12,500 at an interest rate of 6% for 4 years?",
        options: ["Rs. 17,500", "Rs. 15,000", "Rs. 18,000", "Rs. 16,500"],
        correctAnswer: "Rs. 16,500",
      },
];
const selectedQuestions = getRandomQuestions(allquestions, 10);
const questionsContainer = document.getElementById("questions-container");
const submitButton = document.getElementById("submit-button");

let selectedOptions = [];

function startQuiz() {
    showQuestions();
}

function showQuestions() {
    selectedQuestions.forEach((currentQuestion, questionIndex) => {
        const questionElement = document.createElement("div");

        // Add the question number
        const questionNumber = questionIndex + 1;
        questionElement.innerHTML = `<p>${questionNumber}. ${currentQuestion.question}</p>`;

        currentQuestion.options.forEach((option, index) => {
            const radioBtn = document.createElement("input");
            radioBtn.type = "radio";
            radioBtn.name = `question${questionIndex}`;
            radioBtn.value = option;
            radioBtn.id = `q${questionIndex}-option${index + 1}`;
            radioBtn.addEventListener("change", () => {
                selectedOptions[questionIndex] = option;
            });

            const label = document.createElement("label");
            label.innerText = option;
            label.htmlFor = `q${questionIndex}-option${index + 1}`;

            questionElement.appendChild(radioBtn);
            questionElement.appendChild(label);
            questionElement.appendChild(document.createElement("br"));
        });

        questionsContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    let score = 0;

    selectedQuestions.forEach((currentQuestion, questionIndex) => {
        const selectedOption = selectedOptions[questionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            score++;
        }
    });

    return score;
}

function submitAnswers() {
    const score = calculateScore();
    const totalQuestions = selectedOptions.length;

    // Redirect to the result page with the score and totalQuestions as URL parameters
    window.location.href = `result.html?score=${score}`;
}
//fun call
submitButton.addEventListener("click", submitAnswers);

// Function to select random questions
function getRandomQuestions(allQuestions, numberOfQuestions) {
    const selectedQuestions = [];
    const totalQuestions = allQuestions.length;

    if (numberOfQuestions >= totalQuestions) {
        // If the requested number of questions is greater than or equal to the total questions, return all questions
        return allQuestions;
    }

    while (selectedQuestions.length < numberOfQuestions) {
        const randomIndex = Math.floor(Math.random() * totalQuestions);
        const randomQuestion = allQuestions[randomIndex];

        if (!selectedQuestions.includes(randomQuestion)) {
            selectedQuestions.push(randomQuestion);
        }
    }

    return selectedQuestions;
}




// Start the quiz
startQuiz();