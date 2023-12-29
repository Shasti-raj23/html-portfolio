const allquestions = [
    {
        question: "What is the average of the numbers 12, 18, and 24?",
        options: ["18", "16", "15", "20"],
        correctAnswer: "16",
      },
      {
        question:
        "The average age of a family of five members is 30 years. If the age of the youngest member is 10 years, what is the average age of the family excluding the youngest member?",
        options: ["35 years", "32 years", "34 years", "33 years"],
        correctAnswer: "34 years",
      },
      {
        question:
        "The average of six numbers is 12. If one number is excluded, the average becomes 11. What is the excluded number?",
        options: ["10", "12", "15", "18"],
        correctAnswer: "18",
      },
      {
        question: "A student scores 80, 85, 90, and 95 marks in four subjects. What is the average score?",
        options: ["85", "87.5", "90", "92.5"],
        correctAnswer: "87.5",
      },
      {
        question: "The average of the first five multiples of 3 is:",
        options: ["5", "6", "7", "9"],
        correctAnswer: "6",
      },
      {
        question: "The average of 20 numbers is 15. If the average of the first 10 numbers is 12, what is the average of the last 10 numbers?",
        options: ["18", "21", "24", "15"],
        correctAnswer: "24",
      },
      {
        question: "The average of 10, 20, 30, and 40 is:",
        options: ["25", "30", "35", "40"],
        correctAnswer: "30",
      },
      {
        question: "The average of five consecutive odd numbers is 37. What is the smallest of these numbers?",
        options: ["35", "39", "41", "33"],
        correctAnswer: "33",
      },
      {
        question:
          "The average of 50 numbers is 38. If two numbers, 45 and 55, are removed from the list, what is the new average?",
        options: ["37", "38", "39", "40"],
        correctAnswer: "39",
      },
      {
        question: "The average of 8 numbers is 15. If two numbers, 10 and 20, are added, what is the new average?",
        options: ["14", "16", "18", "20"],
        correctAnswer: "16",
      },
      {
        question: "The average of the squares of three consecutive odd numbers is 297. What is the smallest of these numbers?",
        options: ["9", "11", "13", "15"],
        correctAnswer: "11",
      },
      {
        question:
          "The average weight of 3 persons is 60 kg. If one person weighing 70 kg is replaced by another person, what will be the new average weight?",
        options: ["60 kg", "63 kg", "65 kg", "67 kg"],
        correctAnswer: "63 kg",
      },
      {
        question: "If the average of six numbers is 15, what is the sum of these numbers?",
        options: ["80", "90", "100", "110"],
        correctAnswer: "90",
      },
      {
        question:
          "The average of a group of 10 numbers is 25. If one number is removed, the average becomes 24. What is the removed number?",
        options: ["20", "25", "30", "35"],
        correctAnswer: "30",
      },
      {
        question:
          "The average of four numbers is 12.5. If one number is 15, what is the average of the other three numbers?",
        options: ["11", "12", "13", "14"],
        correctAnswer: "11",
      },
      {
        question:
          "The average of 11 numbers is 22. If one number is 33, what is the average of the remaining numbers?",
        options: ["20", "21", "22", "23"],
        correctAnswer: "21",
      },
      {
        question:
          "The average age of a group of 15 people is 30 years. If the age of the instructor is added, the average becomes 31 years. What is the age of the instructor?",
        options: ["30 years", "31 years", "45 years", "15 years"],
        correctAnswer: "15 years",
      },
      {
        question:
          "The average of six numbers is 12. If the sum of the first four numbers is 44, what is the sum of the last two numbers?",
        options: ["4", "8", "12", "16"],
        correctAnswer: "8",
      },
      {
        question:
          "The average of the ages of a husband and wife is 35 years. If their ages are in the ratio of 5:3, what is the age of the wife?",
        options: ["25 years", "30 years", "Option 3: 35 years"],
        correctAnswer: "30 years",
      },
      {
        question:
          "The average of 8 numbers is 40. If each number is multiplied by 2, what is the new average?",
        options: ["40", "80", "20", "160"],
        correctAnswer: "80",
      },
      {
        question:
          "The average temperature on Monday, Tuesday, and Wednesday was 25 degrees Celsius. If the temperature on Monday was 20 degrees Celsius, what was the average temperature on Tuesday and Wednesday?",
        options: ["25 degrees Celsius", "26 degrees Celsius", "27 degrees Celsius", "28 degrees Celsius"],
        correctAnswer: "27 degrees Celsius",
      },
      {
        question:
          "The average salary of a group of employees is $50,000 per year. If the manager's salary is $70,000, what is the average salary of the group excluding the manager?",
        options: ["$45,000", "$50,000", "$55,000", "$60,000"],
        correctAnswer: "$45,000",
      },
      {
        question:
          "The average of 15 numbers is 18. If two numbers, 12 and 20, are added to the list, what is the new average?",
        options: ["18", "19", "20", "21"],
        correctAnswer: "19",
      },
      {
        question:
          "The average of five positive integers is 12. If one of the integers is 15, what is the average of the other four integers?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "11",
      },
      {
        question:
          "The average of five consecutive even numbers is 24. What is the smallest of these numbers?",
        options: ["20", "22", "24", "26"],
        correctAnswer: "22",
      },
      {
        question:
          "The average of 9 numbers is 17. If one number is removed, the average becomes 16. What is the removed number?",
        options: ["17", "18", "19", "20"],
        correctAnswer: "18",
      },
      {
        question: "The average of three numbers is 50. If two of the numbers are 40 and 60, what is the third number?",
        options: ["30", "50", "70", "80"],
        correctAnswer: "70",
      },
      {
        question:
          "The average speed of a car for a 150-mile trip is 50 mph. If the car travels the first 75 miles at 40 mph, what speed must it travel for the remaining 75 miles to maintain the average speed of 50 mph?",
        options: ["60 mph", "70 mph", "80 mph", "90 mph"],
        correctAnswer: "90 mph",
      },
      {
        question:
          "The average age of a group of friends is 25 years. If a new friend with an age of 30 years joins the group, what is the new average age?",
        options: ["24 years", "25 years", "26 years", "27 years"],
        correctAnswer: "26 years",
      },
      {
        question:
          "The average of five test scores is 85. If one of the scores is 90, what is the average of the remaining four scores?",
        options: ["80", "85", "87.5", "88.5"],
        correctAnswer: "87.5",
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