const allquestions = [
    {
        question: "A can complete a job in 12 days, while B can complete the same job in 8 days. If they work together, how many days will it take to complete the job?",
        options: ["3 days", "4 days", "5 days", "6 days"],
        correctAnswer: "4 days",
      },
      {
        question: "If 5 workers can complete a task in 20 days, how many days will it take for 8 workers to complete the same task?",
        options: ["8 days", "10 days", "12 days", "15 days"],
        correctAnswer: "12 days",
      },
      {
        question: "A machine can fill a tank in 6 hours, while another machine can empty it in 8 hours. If both machines are operated simultaneously, how long will it take to fill the tank?",
        options: ["3 hours", "4 hours", "5 hours", "6 hours"],
        correctAnswer: "4 hours",
      },
      {
        question: "Ravi can complete a project in 16 hours, while his friend Deepa can complete the same project in 12 hours. If they work together for 4 hours, how much of the project is left to be completed?",
        options: ["30%", "35%", "40%", "45%"],
        correctAnswer: "30%",
      },
      {
        question: "If 3 men can complete a task in 8 days, how many men are needed to complete the same task in 4 days?",
        options: ["6 men", "8 men", "9 men", "12 men"],
        correctAnswer: "8 men",
      },
      {
        question: "If A can do a job in 10 days and B can do the same job in 15 days, how long will it take for them to complete the job working together?",
        options: ["4 days", "5 days", "6 days", "7.5 days"],
        correctAnswer: "7.5 days",
      },
      {
        question: "If a factory can produce 800 units of a product in 4 hours, how many units can it produce in 7 hours?",
        options: ["1,400 units", "2,100 units", "2,400 units", "3,200 units"],
        correctAnswer: "2,100 units",
      },
      {
        question: "Anshu can mow a lawn in 6 hours, and Raj can do it in 8 hours. How long will it take for them to mow the lawn together?",
        options: ["2.67 hours", "3 hours", "3.2 hours", "3.5 hours"],
        correctAnswer: "2.67 hours",
      },
      {
        question: "If 4 machines can produce 60 widgets in 3 hours, how many widgets can 6 machines produce in 5 hours?",
        options: ["180 widgets", "240 widgets", "300 widgets", "360 widgets"],
        correctAnswer: "240 widgets",
      },
      {
        question: "If it takes 10 people 8 hours to build a house, how many hours will it take for 5 people to build the same house?",
        options: ["8 hours", "10 hours", "16 hours", "20 hours"],
        correctAnswer: "16 hours",
      },
      {
        question: "A can complete a piece of work in 18 days, while B can complete the same work in 12 days. How long will it take for both A and B to complete the work together?",
        options: ["4 days", "6 days", "7 days", "9 days"],
        correctAnswer: "6 days",
      },
      {
        question: "If 3 machines can produce 240 items in 6 hours, how many machines are needed to produce 320 items in the same time?",
        options: ["5 machines", "6 machines", "8 machines", "10 machines"],
        correctAnswer: "6 machines",
      },
      {
        question: "If it takes 15 men 10 days to build a wall, how long will it take for 25 men to build a similar wall?",
        options: ["4 days", "6 days", "8 days", "10 days"],
        correctAnswer: "4 days",
      },
      {
        question: "A can do a job in 24 hours, while B can do the same job in 36 hours. How long will it take for both A and B to complete the job together?",
        options: ["10 hours", "12 hours", "14 hours", "15 hours"],
        correctAnswer: "12 hours",
      },
      {
        question: "If 8 women can complete a task in 6 days, how many days will it take for 12 women to complete the same task?",
        options: ["3 days", "4 days", "5 days", "6 days"],
        correctAnswer: "4 days",
      },
      {
        question: "If 5 workers can build a house in 20 days, how many days will it take for 10 workers to build the same house?",
        options: ["8 days", "10 days", "12 days", "15 days"],
        correctAnswer: "8 days",
      },
      {
        question: "A car can travel 180 miles in 3 hours. How long will it take to travel 240 miles at the same speed?",
        options: ["4 hours", "5 hours", "6 hours", "7 hours"],
        correctAnswer: "5 hours",
      },
      {
        question: "If 2 plumbers can fix a leaky pipe in 6 hours, how many hours will it take for 4 plumbers to fix the same pipe?",
        options: ["1.5 hours", "3 hours", "4 hours", "6 hours"],
        correctAnswer: "3 hours",
      },
      {
        question: "If a group of 6 friends can clean a room in 2 hours, how long will it take for 9 friends to clean three similar rooms?",
        options: ["4 hours", "6 hours", "8 hours", "9 hours"],
        correctAnswer: "4 hours",
      },
      {
        question: "A can paint a wall in 5 hours, while B can paint the same wall in 3 hours. How long will it take for both A and B to paint the wall together?",
        options: ["1.5 hours", "2 hours", "2.5 hours", "3 hours"],
        correctAnswer: "1.5 hours",
      },
      {
        question: "If 10 workers can build a bridge in 20 days, how many days will it take for 15 workers to build the same bridge?",
        options: ["10 days", "12 days", "15 days", "16 days"],
        correctAnswer: "12 days",
      },
      {
        question: "A can dig a well in 8 days, and B can dig the same well in 12 days. How long will it take for both A and B to dig the well together?",
        options: ["4 days", "6 days", "7 days", "8 days"],
        correctAnswer: "6 days",
      },
      {
        question: "If a machine can print 500 pages in 4 hours, how long will it take to print 750 pages at the same rate?",
        options: ["5 hours", "6 hours", "7.5 hours", "8 hours"],
        correctAnswer: "7.5 hours",
      },
      {
        question: "A factory can produce 600 units of a product in 5 hours. How many units can it produce in 8 hours?",
        options: ["960 units", "1,200 units", "1,440 units", "1,800 units"],
        correctAnswer: "960 units",
      },
      {
        question: "If 6 workers can complete a task in 9 days, how many days will it take for 3 workers to complete the same task?",
        options: ["18 days", "24 days", "27 days", "36 days"],
        correctAnswer: "18 days",
      },
      {
        question: "A gardener can mow a lawn in 4 hours, while his assistant can do it in 6 hours. How long will it take for both of them to mow the lawn together?",
        options: ["2 hours", "2.4 hours", "2.5 hours", "3 hours"],
        correctAnswer: "2.4 hours",
      },
      {
        question: "If it takes 12 men 8 hours to build a house, how many days will it take for 16 men to build the same house?",
        options: ["6 days", "7 days", "8 days", "9 days"],
        correctAnswer: "6 days",
      },
      {
        question: "A can complete a task in 30 hours, while B can complete it in 20 hours. How long will it take for A to complete the task if B works for the first 10 hours, and then both work together?",
        options: ["6 hours", "7.5 hours", "9 hours", "10 hours"],
        correctAnswer: "9 hours",
      },
      {
        question: "If 5 workers can build a wall in 15 days, how many walls can 10 workers build in 20 days?",
        options: ["2 walls", "3 walls", "4 walls", "5 walls"],
        correctAnswer: "2 walls",
      },
      {
        question: "A can type a manuscript in 12 hours, while B can type it in 8 hours. How long will it take for both A and B to type the manuscript together?",
        options: ["4 hours", "4.8 hours", "5 hours", "6 hours"],
        correctAnswer: "4.8 hours",
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