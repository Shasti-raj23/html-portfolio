const allquestions = [
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12",
      },
      {
        question: "Simplify √25:",
        options: ["2", "5", "10", "25"],
        correctAnswer: "5",
      },
      {
        question: "What is the cube root of 64?",
        options: ["2", "4", "6", "8"],
        correctAnswer: "2",
      },
      {
        question: "Express √18 as a simplified surd:",
        options: ["√2", "√3", "3√2", "2√3"],
        correctAnswer: "2√3",
      },
      {
        question: "What is the value of 2^3?",
        options: ["4", "8", "16", "64"],
        correctAnswer: "8",
      },
      {
        question: "Simplify 3^2 × 3^4:",
        options: ["9", "18", "81", "243"],
        correctAnswer: "243",
      },
      {
        question: "If 2^x = 32, what is the value of x?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "3",
      },
      {
        question: "Simplify 5^3 ÷ 5^2:",
        options: ["25", "10", "5", "125"],
        correctAnswer: "5",
      },
      {
        question: "What is the value of ∛(-27)?",
        options: ["-3", "3", "-9", "9"],
        correctAnswer: "-3",
      },
      {
        question: "Which of the following is not a surd?",
        options: ["√9", "√16", "√25", "√36"],
        correctAnswer: "√9",
      },
      {
        question: "Simplify √50 ÷ √2:",
        options: ["5", "10", "√5", "25"],
        correctAnswer: "√5",
      },
      {
        question: "What is the value of 4^0?",
        options: ["1", "2", "4", "0"],
        correctAnswer: "1",
      },
      {
        question: "Express 9^(3/2) as a whole number:",
        options: ["3", "9", "27", "81"],
        correctAnswer: "27",
      },
      {
        question: "Simplify (2√3)^2:",
        options: ["6", "12", "18", "36"],
        correctAnswer: "36",
      },
      {
        question: "What is the value of ∛8 ÷ ∛2?",
        options: ["2", "√2", "∛4", "∛8"],
        correctAnswer: "2",
      },
      {
        question: "If a^2 = 25, what is the value of a?",
        options: ["5", "-5", "2", "-2"],
        correctAnswer: "5",
      },
      {
        question: "Simplify (3^4)^2:",
        options: ["9^4", "3^8", "27^2", "81^2"],
        correctAnswer: "3^8",
      },
      {
        question: "What is the value of √49?",
        options: ["4", "6", "7", "9"],
        correctAnswer: "7",
      },
      {
        question: "Simplify 2^(x+2) ÷ 2^x:",
        options: ["2", "4", "8", "16"],
        correctAnswer: "4",
      },
      {
        question: "If 4^y = 16, what is the value of y?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
      },
      {
        question: "Express √27 in its simplest form:",
        options: ["√3", "3√3", "9", "81"],
        correctAnswer: "3√3",
      },
      {
        question: "What is the value of 10^0?",
        options: ["1", "10", "0", "100"],
        correctAnswer: "1",
      },
      {
        question: "Simplify (2^3) × (2^5):",
        options: ["2^8", "2^15", "2^24", "2^40"],
        correctAnswer: "2^8",
      },
      {
        question: "If x^2 = 49, what are the possible values of x?",
        options: ["7 and -7", "6 and 8", "5 and -5", "9 and -9"],
        correctAnswer: "7 and -7",
      },
      {
        question: "Evaluate ∛(-64):",
        options: ["-2", "2", "-4", "4"],
        correctAnswer: "-2",
      },
      {
        question: "What is the value of 7^(1/2)?",
        options: ["√7", "1/√7", "49", "7"],
        correctAnswer: "√7",
      },
      {
        question: "Simplify ∛216:",
        options: ["6", "8", "9", "12"],
        correctAnswer: "8",
      },
      {
        question: "If 3^(2x) = 81, what is the value of x?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
      },
      {
        question: "Express 16^(1/4) as a whole number:",
        options: ["1", "2", "4", "16"],
        correctAnswer: "2",
      },
      {
        question: "Simplify ∛(-125):",
        options: ["-5", "5", "-25", "25"],
        correctAnswer: "-5",
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