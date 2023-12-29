const allquestions = [
  {
    question:
      "It is being given that (232 + 1) is completely divisible by a whole number. Which of the following numbers is completely divisible by this number?",
    options: ["(216 + 1)", "(216 - 1)", "(7 x 223)", "(296 + 1)"],
    correctAnswer: "(296 + 1)",
  },
  {
    question:
      "What least number must be added to 1056, so that the sum is completely divisible by 23?",
    options: ["2", "3", "18", "21"],
    correctAnswer: "2",
  },
  {
    question:
      "How many of the following numbers are divisible by 132? 264, 396, 462, 792, 968, 2178, 5184, 6336",
    options: ["4", "5", "6", "7"],
    correctAnswer: "4",
  },
  {
    question: "(935421 x 625) = ?",
    options: [
      "575648125",
      "584638125",
      "584649125",
      "585628125",
    ],
    correctAnswer: "584638125",
  },
  {
    question:
      "The largest 4 digit number exactly divisible by 88 is:",
    options: ["9944", "9768", "9988", "8888"],
    correctAnswer: "9944",
  },
  {
    question:
      "What is the unit digit in {(6374)1793 x (625)317 x (341491)}?",
    options: ["0", "2", "3", "5"],
    correctAnswer: "0",
  },
  {
    question:
      "The difference of two numbers is 1365. On dividing the larger number by the smaller, we get 6 as quotient and the 15 as remainder. What is the smaller number?",
    options: ["240", "270", "295", "360"],
    correctAnswer: "270",
  },
  {
    question: "(12)3 x 64 ÷ 432 = ?",
    options: ["5184", "5060", "5148", "5084"],
    correctAnswer: "5184",
  },
  {
    question:
      "If the number 517*324 is completely divisible by 3, then the smallest whole number in the place of * will be:",
    options: ["0", "1", "2", "None of these"],
    correctAnswer: "2",
  },
  {
    question:
      "Which one of the following numbers is exactly divisible by 11?",
    options: ["235641", "245642", "315624", "415624"],
    correctAnswer: "415624",
  },
  {
    question: "(?) - 19657 - 33994 = 9999",
    options: ["63650", "53760", "59640", "61560"],
    correctAnswer: "63650",
  },
  {
    question:
      "(753 x 753 + 247 x 247 - 753 x 247)/(753 x 753 x 753 + 247 x 247 x 247) =?",
    options: ["1/1000", "1/506", "253/500", "None of these"],
    correctAnswer: "1/1000",
  },
  {
    question:
      "The difference between the local value and the face value of 7 in the numeral 32675149 is",
    options: ["75142", "64851", "5149", "69993"],
    correctAnswer: "69993",
  },
  {
    question:
      "The difference between a positive proper fraction and its reciprocal is 9/20. The fraction is:",
    options: ["3/5", "3/10", "4/5", "4/3"],
    correctAnswer: "4/5",
  },
  {
    question:
      "If n is a natural number, then (6n2 + 6n) is always divisible by:",
    options: ["6 only", "6 and 12 both", "12 only", "by 18 only"],
    correctAnswer: "6 and 12 both",
  },
  {
    question: "What will be remainder when (6767 + 67) is divided by 68?",
    options: ["1", "63", "66", "67"],
    correctAnswer: "66",
  },
  {
    question:
      "On dividing a number by 5, we get 3 as remainder. What will the remainder when the square of this number is divided by 5?",
    options: ["0", "1", "2", "4"],
    correctAnswer: "4",
  },
  {
    question:
      "How many natural numbers are there between 23 and 100 which are exactly divisible by 6?",
    options: ["8", "11", "12", "13"],
    correctAnswer: "13",
  },
    {
    question:
      "A 3-digit number 4a3 is added to another 3-digit number 984 to give a 4-digit number 13b7, which is divisible by 11. Then, (a + b) = ?",
    options: ["10", "11", "12", "15"],
    correctAnswer: "10",
  },
  {
    question: "The smallest prime number is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: "2",
  },
  {
    question:
      "On dividing a number by 357, we get 39 as remainder. On dividing the same number 17, what will be the remainder?",
    options: ["0", "3", "5", "11"],
    correctAnswer: "5",
  },
  {
    question:
      "In a division sum, the divisor is 10 times the quotient and 5 times the remainder. If the remainder is 46, what is the dividend?",
    options: ["4236", "4306", "4336", "5336"],
    correctAnswer: "5336",
  },
  {
    question:
      "476 ** 0 is divisible by both 3 and 11. The non-zero digits in the hundred's and ten's places are respectively:",
    options: ["7 and 4", "7 and 5", "8 and 5", "None of these"],
    correctAnswer: "8 and 5",
  },
  {
    question: "(112 + 122 + 132 + ... + 202) = ?",
    options: ["385", "2485", "2870", "3255"],
    correctAnswer: "2485",
  },
  {
    question: "Which of the following numbers will completely divide (4915 - 1)?",
    options: ["8", "14", "46", "50"],
    correctAnswer: "8",
  },
  {
    question:
      "n is a whole number which when divided by 4 gives 3 as remainder. What will be the remainder when 2n is divided by 4?",
    options: ["3", "2", "1", "0"],
    correctAnswer: "2",
  },
  {
    question:
      "(489 + 375)2 - (489 - 375)2 / (489 x 375) =?",
    options: ["144", "864", "2", "4"],
    correctAnswer: "4",
  },
  {
    question:
      "(xn - an) is completely divisible by (x - a), when",
    options: [
      "n is any natural number",
      "n is an even natural number",
      "n is an odd natural number",
      "n is prime",
    ],
    correctAnswer: "n is any natural number",
  },
  {
    question:
      "Which of the following numbers will completely divide (325 + 326 + 327 + 328)?",
    options: ["11", "16", "25", "30"],
    correctAnswer: "30",
  },
  {
    question: "What will be remainder when 17200 is divided by 18?",
    options: ["17", "16", "1", "2"],
    correctAnswer: "1",
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