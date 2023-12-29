const allquestions = [
    {
        question: "A store sells a shirt for $40. If the cost price of the shirt is $25, what is the profit percentage?",
        options: ["45%", "80%", "60%", "62%"],
        correctAnswer: "60%",
      },
      {
        question: "If an item was bought for $80 and sold for $100, what is the profit percentage?",
        options: ["37%", "45%", "25%", "88%"],
        correctAnswer: "25%",
      },
      {
        question: "A book was bought for $15 and sold for $12. What is the loss percentage?",
        options: ["20%", "55%", "43%", "18%"],
        correctAnswer: "20%",
      },
      {
        question: "If the cost price of a pen is $3 and it was sold for $4, what is the profit as a percentage of the cost price?",
        options: ["82.88%", "33.33%", "70%", "20%"],
        correctAnswer: "33.33%",
      },
      {
        question: "A bike was purchased for $2000 and sold at a loss of 15%. What was the selling price?",
        options: ["$1000", "$3500", "$4670", "$1700"],
        correctAnswer: "$1700",
      },
      {
        question: "If an article is sold at a 10% profit, and its selling price is $55, what is the cost price?",
        options: ["$45", "$50", "$60", "$180"],
        correctAnswer: "$50",
      },
      {
        question: "A shopkeeper marked up an item by 40% and then offered a 20% discount. What is the selling price as a percentage of the original price?",
        options: ["$112", "$450", "$271", "$50.55"],
        correctAnswer: "$112",
      },
      {
        question: "A shirt was sold for $36, resulting in a 20% profit. What was the cost price?",
        options: ["$45", "$60", "$30", "$42"],
        correctAnswer: "$30",
      },
      {
        question: "If a laptop is sold for $1200 with a 20% profit, what is the cost price?",
        options: ["$2000", "$100", "$750", "$1000"],
        correctAnswer: "$1000",
      },
      {
        question: "An item is sold for $45, resulting in a loss of 10%. What was the cost price?",
        options: ["$65", "$50", "$70", "$150"],
        correctAnswer: "$50",
      },
      {
        question: "If a watch is sold for $160 with a loss of 20%, what was the cost price?",
        options: ["$200", "$500", "$120", "$185"],
        correctAnswer: "$200",
      },
      {
        question: "A shopkeeper sold a mobile phone for $450, making a profit of 25%. What was the cost price?",
        options: ["$650", "$720", "$360", "$550"],
        correctAnswer: "$360",
      },
      {
        question: "If a toy is sold for $24 with a profit of 20%, what is the cost price?",
        options: ["$10", "$20", "$840", "$110"],
        correctAnswer: "$20",
      },
      {
        question: "A company bought 1000 pencils at $0.50 each. If they sold 800 pencils at $1.00 each and the rest at $0.75 each, what is the total profit or loss?",
        options: ["$450 profit", "$240 profit", "$720 profit", "$100 profit"],
        correctAnswer: "$100 profit",
      },
      {
        question: "A jacket was bought for $80 and sold at a loss of 15%. What was the selling price?",
        options: ["$68", "$86", "$350", "$100"],
        correctAnswer: "$68",
      },
      {
        question: "If a car is sold for $18,000 with a profit of 20%, what was the cost price?",
        options: ["$15,000", "$10", "$4500", "$120"],
        correctAnswer: "$15,000",
      },
      {
        question: "A company bought 500 computer mice at $10 each and sold them for $15 each. What is the total profit?",
        options: ["$25,000", "$6400", "$700", "$2500"],
        correctAnswer: "$2500",
      },
      {
        question: "If a camera is sold for $800 with a loss of 10%, what was the cost price?",
        options: ["$45.55", "$888.89", "$56.87", "$950"],
        correctAnswer: "$888.89",
      },
      {
        question: "A shopkeeper sold a phone for $300, incurring a loss of 25%. What was the cost price?",
        options: ["$800", "$540", "$250", "$400"],
        correctAnswer: "$400",
      },
      {
        question: "A TV was sold for $450 with a profit of 12.5%. What was the cost price?",
        options: ["$400", "$888.78", "$700", "$640"],
        correctAnswer: "$400",
      },
      {
        question: "If a bicycle is sold for $120 with a loss of 20%, what was the cost price?",
        options: ["$33.33", "$450", "$150", "$10"],
        correctAnswer: "$150",
      },
      {
        question: "A company bought 200 books for $1500. If they sold 120 books at $10 each and the rest at $8 each, what is the total profit or loss?",
        options: ["$330 profit", "$740", "$140 profit", "$880"],
        correctAnswer: "$140 profit",
      },
      {
        question: "If a shirt is sold for $24 with a profit of 20%, what is the cost price?",
        options: ["$40", "$20", "$70 profit", "$450"],
        correctAnswer: "$20",
      },
      {
        question: "A shopkeeper sold a watch for $60, incurring a loss of 10%. What was the cost price?",
        options: ["$66.67", "$89.88", "$568", "$66.80"],
        correctAnswer: "$66.67",
      },
      {
        question: "If a laptop is sold for $900 with a profit of 25%, what was the cost price?",
        options: ["$550", "$860", "$420", "$720"],
        correctAnswer: "$720",
      },
      {
        question: "A company bought 300 chairs at $25 each and sold them for $30 each. What is the total profit?",
        options: ["$600 profit", "$250", "$10", "$1500"],
        correctAnswer: "$1500",
      },
      {
        question: "If a mobile phone is sold for $200 with a loss of 20%, what was the cost price?",
        options: ["$400", "$60", "$250", "$100"],
        correctAnswer: "$250",
      },
      {
        question: "A book was bought for $12 and sold for $15. What is  the profit percentage?",
        options: ["25%", "35%", "70%", "10%"],
        correctAnswer: "25%",
      },
      {
        question: "If an item was bought for $40 and sold for $35, what is the loss percentage?",
        options: ["80%", "12.05%", "30%", "99%"],
        correctAnswer: "12.5%",
      },
      {
        question: "A toy was purchased for $8 and sold at a profit of 50%. What was the selling price?",
        options: ["$30", "$50", "$12", "$100"],
        correctAnswer: "$12",
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