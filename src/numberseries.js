const allquestions = [
    
    {
        question: "13, 26, 39, 52, ?",
        options: ["65", "68", "70", "75"],
        correctAnswer: "65",
    },
    {
        question: "16, 32, 48, 64, ?",
        options: ["80", "96", "100", "112"],
        correctAnswer: "96",
    },
    {
        question: "22, 44, 66, 88, ?",
        options: ["100", "110", "120", "132"],
        correctAnswer: "110",
    },
    {
        question: "24, 48, 72, 96, ?",
        options: ["120", "140", "150", "160"],
        correctAnswer: "150",
    },
    {
        question: "26, 52, 78, 104, ?",
        options: ["130", "140", "150", "160"],
        correctAnswer: "130",
    },
    {
        question: "28, 56, 84, 112, ?",
        options: ["130", "140", "150", "160"],
        correctAnswer: "140",
    },
    {
        question: "30, 60, 90, 120, ?",
        options: ["150", "160", "170", "180"],
        correctAnswer: "150",
    },
    {
        question: "32, 64, 96, 128, ?",
        options: ["160", "170", "180", "190"],
        correctAnswer: "180",
    },
    {
        question: "34, 68, 102, 136, ?",
        options: ["170", "180", "190", "200"],
        correctAnswer: "200",
    },
    {
        question: "36, 72, 108, 144, ?",
        options: ["180", "190", "200", "210"],
        correctAnswer: "200",
    },
    {
        question: "38, 76, 114, 152, ?",
        options: ["210", "220", "230", "240"],
        correctAnswer: "220",
    },
    {
        question: "40, 80, 120, 160, ?",
        options: ["200", "210", "220", "230"],
        correctAnswer: "200",
    },
    {
        question: "8, 16, 24, 32, ?",
        options: ["36", "40", "48", "56"],
        correctAnswer: "48",
    },
    {
        question: "100, 200, 300, 400, ?",
        options: ["500", "600", "700", "800"],
        correctAnswer: "500",
    },
    {
        question: "9, 18, 27, 36, ?",
        options: ["45", "54", "63", "72"],
        correctAnswer:"45",
    },
    {
        question: "2, 4, 6, 8, ?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "10",
    },
    {
        question: "100, 200, 300, 400, ?",
        options: ["500", "600", "700", "800"],
        correctAnswer: "500",
    },
    {
        question: "9, 18, 27, 36, ?",
        options: ["45", "54", "63", "72"],
        correctAnswer: "54",
    },
    {
        question: "4, 9, 16, 25, ?",
        options: ["36", "49", "64", "81"],
        correctAnswer: "49",
    },
    {
        question: "15, 30, 45, 60, ?",
        options: ["75", "80", "90", "100"],
        correctAnswer: "75",
    },
    {
        question: "6, 12, 24, 48, ?",
        options: ["60", "72", "84", "96"],
        correctAnswer: "96",
    },
    {
        question: "11, 22, 33, 44, ?",
        options: ["55", "56", "66", "77"],
        correctAnswer: "55",
    },
    {
        question: "25, 50, 75, 100, ?",
        options: ["125", "150", "175", "200"],
        correctAnswer: "150",
    },
    {
        question: "14, 28, 42, 56, ?",
        options: ["70", "72", "84", "98"],
        correctAnswer: "84",
    },
    {
        question: "7, 14, 21, 28, ?",
        options: ["30", "32", "35", "36"],
        correctAnswer: "36",
    },
    {
        question: "40, 80, 120, 160, ?",
        options: ["200", "220", "240", "260"],
        correctAnswer: "200",
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
