const allquestions = [
    {
        question: "Calculate the cube root of 64.",
        options: ["2", "4", "8", "16"],
        correctAnswer: "4",
      },
      {
        question: "Determine the cube root of 27.",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
      },
      {
        question: "Determine the cube root of 125.",
        options: ["3", "5", "7", "11"],
        correctAnswer: "5",
      },
      {
        question: "Determine the cube root of 512.",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8",
      },
      {
        question: "Calculate the cube root of 100.",
        options: ["4", "5", "6", "7"],
        correctAnswer: "4",
      },
      {
        question: "Determine the cube root of 1331.",
        options: ["7", "11", "13", "17"],
        correctAnswer: "11",
      },
      {
        question: "Calculate the cube root of 1000.",
        options: ["5", "10", "20", "25"],
        correctAnswer: "10",
      },
      {
        question: "Determine the cube root of 216.",
        options: ["4", "6", "8", "12"],
        correctAnswer: "6",
      },
      {
        question: "Determine the cube root of 10000.",
        options: ["20", "30", "40", "50"],
        correctAnswer: "30",
      },
      {
        question: "Calculate the cube root of 8000.",
        options: ["20", "30", "40", "50"],
        correctAnswer: "20",
      },
      {
        question: "Determine the cube root of 1250.",
        options: ["5", "10", "15", "20"],
        correctAnswer: "5",
      },
      {
        question: "Determine the cube root of 343.",
        options: ["3", "6", "7", "9"],
        correctAnswer: "7",
      },
      {
        question: "Determine the cube root of 729.",
        options: ["3", "6", "9", "12"],
        correctAnswer: "9",
      },
      {
        question: "Determine the cube root of 64.",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4",
      },
      {
        question: "Determine the cube root of 100.",
        options: ["4", "5", "6", "7"],
        correctAnswer: "4",
      },
      {
        question: "Determine the cube root of 512.",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8",
      },
      {
        question: "Calculate the cube root of 1331.",
        options: ["7", "11", "13", "17"],
        correctAnswer: "11",
      },
      {
        question: "Determine the cube root of 216.",
        options: ["4", "6", "8", "12"],
        correctAnswer: "6",
      },
      {
        question: "Determine the cube root of 64.",
        options: ["2", "4", "6", "8"],
        correctAnswer: "4",
      },
      {
        question: "Calculate the cube root of 1000.",
        options: ["5", "10", "20", "25"],
        correctAnswer: "5",
      },
      {
        question: "Determine the cube root of 343.",
        options: ["3", "6", "7", "9"],
        correctAnswer: "7",
      },
      {
        question: "Determine the cube root of 10000.",
        options: ["20", "30", "40", "50"],
        correctAnswer: "30",
      },
      {
        question: "Calculate the cube root of 8000.",
        options: ["20", "30", "40", "50"],
        correctAnswer: "20",
      },
      {
        question: "Determine the cube root of 1250.",
        options: ["5", "10", "15", "20"],
        correctAnswer: "5",
      },
      {
        question: "Determine the cube root of 729.",
        options: ["3", "6", "9", "12"],
        correctAnswer: "9",
      },
      {
        question: "Determine the cube root of 64.",
        options: ["2", "4", "6", "8"],
        correctAnswer: "4",
      },
      {
        question: "Determine the cube root of 512.",
        options: ["4", "6", "8", "10"],
        correctAnswer: "8",
      },
      {
        question: "Calculate the cube root of 1331.",
        options: ["7", "11", "13", "17"],
        correctAnswer: "11",
      },
      {
        question: "Determine the cube root of 216.",
        options: ["4", "6", "8", "12"],
        correctAnswer: "6",
      },
      {
        question: "Determine the cube root of 10000.",
        options: ["20", "30", "40", "50"],
        correctAnswer: "30",
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