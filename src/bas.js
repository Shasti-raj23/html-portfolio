const allquestions = [
    {
        question: "A boat can travel 30 km upstream in 6 hours. If the speed of the stream is 2 km/hr, what is the speed of the boat in still water?",
        options: ["8 km/hr", "7 km/hr", "6 km/hr", "5 km/hr"],
        correctAnswer: "8 km/hr",
      },
      {
        question: "If a boat can travel 24 km downstream in 4 hours, what is the speed of the stream if the boat's speed in still water is 8 km/hr?",
        options: ["3 km/hr", "2 km/hr", "4 km/hr", "5 km/hr"],
        correctAnswer: "2 km/hr",
      },
      {
        question: "A man can row 15 km/hr in still water. If the stream flows at a rate of 3 km/hr, what is the man's effective speed when rowing upstream?",
        options: ["10 km/hr", "12 km/hr", "9 km/hr", "11 km/hr"],
        correctAnswer: "9 km/hr",
      },
      {
        question: "If a boat can go 30 km downstream in 5 hours, what is the speed of the boat if the speed of the stream is 3 km/hr?",
        options: ["5 km/hr", "6 km/hr", "7 km/hr", "4 km/hr"],
        correctAnswer: "5 km/hr",
      },
      {
        question: "A boat takes 2 hours to cover a distance of 12 km upstream. What is the speed of the stream if the boat's speed in still water is 8 km/hr?",
        options: ["2 km/hr", "4 km/hr", "3 km/hr", "5 km/hr"],
        correctAnswer: "2 km/hr",
      },
      {
        question: "If a boat can row 40 km downstream in 4 hours, what is the speed of the stream if the boat's speed in still water is 10 km/hr?",
        options: ["2 km/hr", "3 km/hr", "5 km/hr", "4 km/hr"],
        correctAnswer: "5 km/hr",
      },
      {
        question: "A boat travels 60 km upstream in 10 hours. If the speed of the stream is 4 km/hr, what is the speed of the boat in still water?",
        options: ["7 km/hr", "9 km/hr", "8 km/hr", "6 km/hr"],
        correctAnswer: "9 km/hr",
      },
      {
        question: "If it takes 3 hours for a boat to cover a distance of 18 km upstream, what is the speed of the stream if the boat's speed in still water is 6 km/hr?",
        options: ["4 km/hr", "2 km/hr", "3 km/hr", "5 km/hr"],
        correctAnswer: "2 km/hr",
      },
      {
        question: "A man can row 24 km/hr in still water. If the stream flows at a rate of 6 km/hr, what is the man's effective speed when rowing downstream?",
        options: ["24 km/hr", "28 km/hr", "26 km/hr", "30 km/hr"],
        correctAnswer: "30 km/hr",
      },
      {
        question: "If a boat can travel 45 km downstream in 3 hours, what is the speed of the boat if the speed of the stream is 5 km/hr?",
        options: ["15 km/hr", "9 km/hr", "7 km/hr", "12 km/hr"],
        correctAnswer: "15 km/hr",
      },
      {
        question: "A boat takes 4 hours to cover a distance of 24 km downstream. What is the speed of the stream if the boat's speed in still water is 6 km/hr?",
        options: ["3 km/hr", "4 km/hr", "5 km/hr", "6 km/hr"],
        correctAnswer: "6 km/hr",
      },
      {
        question: "If a boat can row 36 km downstream in 3 hours, what is the speed of the stream if the boat's speed in still water is 12 km/hr?",
        options: ["5 km/hr", "3 km/hr", "4 km/hr", "6 km/hr"],
        correctAnswer: "3 km/hr",
      },
      {
        question: "A boat travels 45 km downstream in 9 hours. If the speed of the stream is 3 km/hr, what is the speed of the boat in still water?",
        options: ["8 km/hr", "6 km/hr", "7 km/hr", "9 km/hr"],
        correctAnswer: "6 km/hr",
      },
      {
        question: "If it takes 2 hours for a boat to cover a distance of 18 km upstream, what is the speed of the stream if the boat's speed in still water is 9 km/hr?",
        options: ["2 km/hr", "3 km/hr", "4 km/hr", "5 km/hr"],
        correctAnswer: "2 km/hr",
      },
      {
        question: "A man can row 20 km/hr in still water. If the stream flows at a rate of 4 km/hr, what is the man's effective speed when rowing downstream?",
        options: ["22 km/hr", "24 km/hr", "18 km/hr", "16 km/hr"],
        correctAnswer: "24 km/hr",
      },
      {
        question: "If a boat can travel 36 km downstream in 6 hours, what is the speed of the boat if the speed of the stream is 4 km/hr?",
        options: ["9 km/hr", "8 km/hr", "7 km/hr", "6 km/hr"],
        correctAnswer: "9 km/hr",
      },
      {
        question: "A boat takes 3 hours to cover a distance of 15 km upstream. What is the speed of the stream if the boat's speed in still water is 5 km/hr?",
        options: ["2 km/hr", "1 km/hr", "4 km/hr", "3 km/hr"],
        correctAnswer: "3 km/hr",
      },
      {
        question: "If a boat can row 48 km downstream in 4 hours, what is the speed of the stream if the boat's speed in still water is 12 km/hr?",
        options: ["5 km/hr", "3 km/hr", "4 km/hr", "6 km/hr"],
        correctAnswer: "3 km/hr",
      },
      {
        question: "A boat travels 72 km downstream in 8 hours. If the speed of the stream is 6 km/hr, what is the speed of the boat in still water?",
        options: ["11 km/hr", "9 km/hr", "10 km/hr", "12 km/hr"],
        correctAnswer: "9 km/hr",
      },
      {
        question: "If it takes 5 hours for a boat to cover a distance of 30 km upstream, what is the speed of the stream if the boat's speed in still water is 7 km/hr?",
        options: ["3 km/hr", "1 km/hr", "2 km/hr", "4 km/hr"],
        correctAnswer: "2 km/hr",
      },
      {
        question: "A man can row 36 km/hr in still water. If the stream flows at a rate of 9 km/hr, what is the man's effective speed when rowing downstream?",
        options: ["35 km/hr", "45 km/hr", "40 km/hr", "30 km/hr"],
        correctAnswer: "45 km/hr",
      },
      {
        question: "If a boat can travel 60 km downstream in 5 hours, what is the speed of the boat if the speed of the stream is 8 km/hr?",
        options: ["7 km/hr", "9 km/hr", "8 km/hr", "10 km/hr"],
        correctAnswer: "7 km/hr",
      },
      {
        question: "A boat takes 2 hours to cover a distance of 20 km upstream. What is the speed of the stream if the boat's speed in still water is 10 km/hr?",
        options: ["2 km/hr", "4 km/hr", "3 km/hr", "5 km/hr"],
        correctAnswer: "2 km/hr",
      },
      {
        question: "A boat can travel 20 km upstream in 4 hours. If the speed of the stream is 2 km/hr, what is the speed of the boat in still water?",
        options: ["7 km/hr", "6 km/hr", "5 km/hr", "4 km/hr"],
        correctAnswer: "7 km/hr",
      },
      {
        question: "If a boat can travel 36 km downstream in 6 hours, what is the speed of the stream if the boat's speed in still water is 6 km/hr?",
        options: ["3 km/hr", "4 km/hr", "5 km/hr", "7 km/hr"],
        correctAnswer: "4 km/hr",
      },
      {
        question: "A man can row 18 km/hr in still water. If the stream flows at a rate of 4 km/hr, what is the man's effective speed when rowing downstream?",
        options: ["20 km/hr", "22 km/hr", "14 km/hr", "16 km/hr"],
        correctAnswer: "20 km/hr",
      },
      {
        question: "If a boat can go 48 km downstream in 8 hours, what is the speed of the boat if the speed of the stream is 4 km/hr?",
        options: ["9 km/hr", "8 km/hr", "7 km/hr", "6 km/hr"],
        correctAnswer: "9 km/hr",
      },
      {
        question: "A boat takes 2 hours to cover a distance of 12 km upstream. What is the speed of the stream if the boat's speed in still water is 6 km/hr?",
        options: ["1 km/hr", "2 km/hr", "3 km/hr", "4 km/hr"],
        correctAnswer: "3 km/hr",
      },
      {
        question: "If it takes 4 hours for a boat to cover a distance of 36 km upstream, what is the speed of the stream if the boat's speed in still water is 9 km/hr?",
        options: ["2 km/hr", "3 km/hr", "4 km/hr", "5 km/hr"],
        correctAnswer: "4 km/hr",
      },
      {
        question: "A boat travels 60 km upstream in 12 hours. If the speed of the stream is 3 km/hr, what is the speed of the boat in still water?",
        options: ["9 km/hr", "8 km/hr", "7 km/hr", "6 km/hr"],
        correctAnswer: "9 km/hr",
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