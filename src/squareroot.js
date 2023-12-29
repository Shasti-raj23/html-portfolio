const allquestions = [
  {
    question: "Find the square root of 25.",
    options: ["2", "4", "5", "6"],
    correctAnswer: "5",
  },
  {
    question: "What is the square root of 144?",
    options: ["9", "10", "12", "14"],
    correctAnswer: "12",
  },
  {
    question: "What is the square root of 81?",
    options: ["7", "8", "9", "10"],
    correctAnswer: "9",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8",
  },
  {
    question: "What is the square root of 100?",
    options: ["8", "9", "10", "11"],
    correctAnswer: "10",
  },
  {
    question: "What is the square root of 36?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "5",
  },
  {
    question: "What is the square root of 49?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "What is the square root of 121?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "9",
  },
  {
    question: "What is the square root of 1444?",
    options: ["32", "34", "36", "38"],
    correctAnswer: "34",
  },
  {
    question: "What is the square root of 1600?",
    options: ["36", "40", "44", "48"],
    correctAnswer: "40",
  },
  {
    question: "What is the square root of 169?",
    options: ["11", "13", "15", "17"],
    correctAnswer: "11",
  },
  {
    question: "What is the square root of 196?",
    options: ["12", "14", "16", "18"],
    correctAnswer: "14",
  },
  {
    question: "What is the square root of 256?",
    options: ["12", "14", "16", "18"],
    correctAnswer: "16",
  },
  {
    question: "What is the square root of 22500?",
    options: ["140", "150", "160", "170"],
    correctAnswer: "150",
  },
  {
    question: "Find the square root of 14400.",
    options: ["110", "120", "130", "140"],
    correctAnswer: "120",
  },
  {
    question: "What is the square root of 3136?",
    options: ["52", "56", "60", "64"],
    correctAnswer: "56",
  },
  {
    question: "What is the square root of 324?",
    options: ["16", "18", "20", "22"],
    correctAnswer: "18",
  },
  {
    question: "What is the square root of 625?",
    options: ["25", "27", "30", "32"],
    correctAnswer: "25",
  },
  {
    question: "What is the square root of 3249?",
    options: ["51", "53", "57", "61"],
    correctAnswer: "51",
  },
  {
    question: "What is the square root of 62500?",
    options: ["200", "220", "240", "260"],
    correctAnswer: "220",
  },
  {
    question: "What is the square root of 5329?",
    options: ["71", "73", "75", "77"],
    correctAnswer: "71",
  },
  {
    question: "What is the square root of 4225?",
    options: ["61", "65", "67", "71"],
    correctAnswer: "71",
  },
  {
    question: "What is the square root of 3364?",
    options: ["54", "58", "62", "66"],
    correctAnswer: "58",
  },
  {
    question: "What is the square root of 2704?",
    options: ["48", "52", "56", "60"],
    correctAnswer: "52",
  },
  {
    question: "What is the square root of 6561?",
    options: ["77", "81", "85", "89"],
    correctAnswer: "81",
  },
  {
    question: "What is the square root of 6084?",
    options: ["74", "76", "78", "80"],
    correctAnswer: "74",
  },
  {
    question: "What is the square root of 4624?",
    options: ["64", "68", "72", "76"],
    correctAnswer: "64",
  },
  {
    question: "What is the square root of 2116?",
    options: ["44", "46", "48", "50"],
    correctAnswer: "46",
  },
  {
    question: "What is the square root of 2025?",
    options: ["42", "45", "48", "50"],
    correctAnswer: "42",
  },
  {
    question: "What is the square root of 1681?",
    options: ["41", "43", "45", "47"],
    correctAnswer: "41",
  },
  {
    question: "What is the square root of 1369?",
    options: ["37", "39", "41", "43"],
    correctAnswer: "37",
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