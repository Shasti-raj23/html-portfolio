const allquestions = [
  {
    question: "What is the probability of rolling a 4 on a fair six-sided die?",
    options: ["1/6", "1/3", "1/4", "1/6"],
    correctAnswer: "1/3",
  },
  {
    question: "If you flip a fair coin twice, what is the probability of getting heads both times?",
    options: ["1/4", "1/2", "1/3", "1/6"],
    correctAnswer: "1/3",
  },
  {
    question:
      "A bag contains 5 red marbles, 3 green marbles, and 2 blue marbles. If you pick one marble at random, what is the probability it is green?",
    options: ["1/5", "1/3", "3/10", "3/5"],
    correctAnswer: "1/3",
  },
  {
    question:
      "You draw a card from a standard deck of 52 cards. What is the probability of drawing a heart or a diamond?",
    options: ["13/26", "1/4", "1/2", "2/3"],
    correctAnswer: "13/26",
  },
  {
    question:
      "If you roll two fair six-sided dice, what is the probability that the sum of the numbers is 7?",
    options: ["1/6", "1/3", "1/4", "1/12"],
    correctAnswer: "1/6",
  },
  {
    question:
      "In a group of 30 people, what is the probability that at least two people share the same birthday?",
    options: ["0.71", "0.5", "0.29", "0.41"],
    correctAnswer: "0.71",
  },
  {
    question:
      "If you have a bag of 10 marbles, 4 of which are red and 6 are blue, what is the probability of drawing a red marble, not replacing it, and then drawing another red marble?",
    options: ["2/15", "4/15", "1/3", "2/5"],
    correctAnswer: "4/15",
  },
  {
    question: "What is the probability of getting tails on a fair coin?",
    options: ["1/2", "1/4", "3/4", "1/3"],
    correctAnswer: "1/2",
  },
  {
    question:
      "You have a deck of 52 cards. What is the probability of drawing a face card (king, queen, or jack)?",
    options: ["3/13", "1/13", "4/13", "1/4"],
    correctAnswer: "4/13",
  },
  {
    question:
      "If you randomly select a letter from the word 'PROBABILITY,' what is the probability that it is a vowel?",
    options: ["3/11", "2/11", "5/11", "4/11"],
    correctAnswer: "5/11",
  },
  {
    question: "If you roll a fair six-sided die, what is the probability of getting an odd number (1, 3, or 5)?",
    options: ["1/2", "2/3", "1/4", "3/6"],
    correctAnswer: "1/2",
  },
  {
    question: "In a deck of 52 cards, what is the probability of drawing a red card (heart or diamond)?",
    options: ["26/52", "1/4", "1/2", "27/52"],
    correctAnswer: "27/52",
  },
  {
    question:
      "You have a bag with 3 black socks and 4 white socks. What is the probability of randomly selecting a black sock and then a white sock (without replacement)?",
    options: ["3/7", "4/7", "2/7", "3/8"],
    correctAnswer: "3/7",
  },
  {
    question: "If you roll a fair six-sided die, what is the probability of getting a number less than 4?",
    options: ["1/4", "1/3", "1/2", "2/6"],
    correctAnswer: "1/2",
  },
  {
    question:
      "A box contains 8 red balls and 4 blue balls. What is the probability of drawing a blue ball, not replacing it, and then drawing another blue ball?",
    options: ["1/12", "3/12", "1/4", "2/6"],
    correctAnswer: "3/12",
  },
  {
    question:
      "If you randomly select a card from a standard deck, what is the probability that it is a spade or a club?",
    options: ["1/4", "26/52", "13/26", "1/2"],
    correctAnswer: "1/2",
  },
  {
    question: "You are rolling a fair six-sided die. What is the probability of rolling a number greater than 2?",
    options: ["4/6", "1/2", "2/6", "3/6"],
    correctAnswer: "3/6",
  },
  {
    question:
      "In a bag, there are 10 green marbles, 5 blue marbles, and 3 red marbles. What is the probability of drawing a blue marble followed by a green marble (without replacement)?",
    options: ["5/18", "10/18", "15/18", "7/18"],
    correctAnswer: "15/18",
  },
  {
    question: "If you flip a fair coin three times, what is the probability of getting at least one head?",
    options: ["1/8", "7/8", "3/8", "4/8"],
    correctAnswer: "7/8",
  },
  {
    question: "A deck of 52 cards contains 4 aces. What is the probability of drawing an ace from the deck?",
    options: ["1/13", "1/4", "4/13", "4/52"],
    correctAnswer: "4/13",
  },
  {
    question: "You roll a fair six-sided die. What is the probability of rolling an even number?",
    options: ["2/6", "1/3", "3/6", "4/6"],
    correctAnswer: "4/6",
  },
  {
    question:
      "If you have a bag with 2 red balls and 3 green balls, what is the probability of drawing a green ball on the first draw and a red ball on the second draw (without replacement)?",
    options: ["2/5", "3/5", "1/5", "2/4"],
    correctAnswer: "3/5",
  },
  {
    question:
      "In a deck of 52 cards, what is the probability of drawing a face card (king, queen, or jack) or a heart?",
    options: ["5/13", "9/13", "1/4", "12/52"],
    correctAnswer: "9/13",
  },
  // ... Add more questions as needed
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