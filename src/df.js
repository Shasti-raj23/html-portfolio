const allquestions = [
    {
        question: "What is 3/4 expressed as a decimal fraction?",
        options: ["0.25", "0.5", "0.75", "1.25"],
        correctAnswer: "0.75",
      },
      {
        question: "If you add 0.2 to 0.35, what is the result?",
        options: ["0.55", "0.65", "0.75", "0.85"],
        correctAnswer: "0.65",
      },
      {
        question: "Express the fraction 7/10 as a decimal.",
        options: ["0.07", "0.7", "7", "0.007"],
        correctAnswer: "0.7",
      },
      {
        question: "What is 1/8 in decimal form?",
        options: ["0.125", "0.25", "0.5", "0.875"],
        correctAnswer: "0.125",
      },
      {
        question: "If you multiply 0.6 by 2.5, what is the result?",
        options: ["0.15", "1.5", "1.25", "15"],
        correctAnswer: "1.25",
      },
      {
        question: "What is the decimal equivalent of 3/5?",
        options: ["0.3", "0.6", "0.75", "1.2"],
        correctAnswer: "0.6",
      },
      {
        question: "Convert 5/6 to a decimal.",
        options: ["0.83", "0.5", "0.6", "0.67"],
        correctAnswer: "0.83",
      },
      {
        question: "Subtract 0.4 from 0.9.",
        options: ["0.5", "0.6", "0.4", "0.3"],
        correctAnswer: "0.5",
      },
      {
        question: "What is 2/9 as a decimal?",
        options: ["0.22", "0.11", "0.25", "0.18"],
        correctAnswer: "0.22",
      },
      {
        question: "Multiply 0.75 by 0.8.",
        options: ["0.56", "0.6", "0.72", "0.48"],
        correctAnswer: "0.72",
      },
      {
        question: "Convert 4/7 to a decimal.",
        options: ["0.28", "0.57", "0.36", "0.46"],
        correctAnswer: "0.57",
      },
      {
        question: "What is 1/3 as a decimal fraction?",
        options: ["0.33", "0.25", "0.5", "0.75"],
        correctAnswer: "0.33",
      },
      {
        question: "Add 0.15 to 0.45.",
        options: ["0.3", "0.55", "0.6", "0.75"],
        correctAnswer: "0.6",
      },
      {
        question: "Express 5/8 as a decimal.",
        options: ["0.625", "0.375", "0.875", "0.25"],
        correctAnswer: "0.625",
      },
      {
        question: "Subtract 0.6 from 1.2.",
        options: ["0.3", "0.5", "0.8", "0.9"],
        correctAnswer: "0.6",
      },
      {
        question: "What is 3/10 as a decimal?",
        options: ["0.3", "0.1", "0.03", "0.15"],
        correctAnswer: "0.3",
      },
      {
        question: "Multiply 0.4 by 0.7.",
        options: ["0.14", "0.28", "0.35", "0.56"],
        correctAnswer: "0.28",
      },
      {
        question: "Convert 6/9 to a decimal.",
        options: ["0.67", "0.56", "0.75", "0.88"],
        correctAnswer: "0.67",
      },
      {
        question: "What is 2/5 expressed as a decimal fraction?",
        options: ["0.2", "0.4", "0.6", "0.8"],
        correctAnswer: "0.4",
      },
      {
        question: "Add 0.25 to 0.35.",
        options: ["0.6", "0.55", "0.45", "0.3"],
        correctAnswer: "0.6",
      },
      {
        question: "Express the fraction 4/9 as a decimal.",
        options: ["0.44", "0.36", "0.49", "0.9"],
        correctAnswer: "0.44",
      },
      {
        question: "Subtract 0.75 from 1.5.",
        options: ["0.75", "0.6", "0.25", "0.9"],
        correctAnswer: "0.75",
      },
      {
        question: "What is 5/12 as a decimal?",
        options: ["0.41", "0.42", "0.52", "0.62"],
        correctAnswer: "0.42",
      },
      {
        question: "Multiply 0.6 by 0.9.",
        options: ["0.54", "0.45", "0.36", "0.63"],
        correctAnswer: "0.54",
      },
      {
        question: "Convert 7/8 to a decimal.",
        options: ["0.625", "0.875", "0.375", "0.725"],
        correctAnswer: "0.875",
      },
      {
        question: "Subtract 0.15 from 0.5.",
        options: ["0.4", "0.35", "0.25", "0.15"],
        correctAnswer: "0.35",
      },
      {
        question: "What is 4/6 as a decimal fraction?",
        options: ["0.4", "0.6", "0.66", "0.8"],
        correctAnswer: "0.6",
      },
      {
        question: "Add 0.3 to 0.7.",
        options: ["0.1", "1", "0.5", "1.3"],
        correctAnswer: "1.0",
      },
      {
        question: "Express the fraction 2/10 as a decimal.",
        options: ["0.2", "0.02", "0.22", "0.12"],
        correctAnswer: "0.2",
      },
      {
        question: "What is 3/8 in decimal form?",
        options: ["0.375", "0.475", "0.275", "0.575"],
        correctAnswer: "0.375",
      },
      {
        question: "Multiply 0.25 by 0.4.",
        options: ["0.1", "0.2", "0.3", "0.4"],
        correctAnswer: "0.1",
      }
      
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