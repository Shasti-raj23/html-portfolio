const allquestions = [
  {
    question:
      "Father is aged three times more than his son Ronit. After 8 years, he would be two and a half times of Ronit's age. After further 8 years, how many times would he be of Ronit's age?",
    options: ["2 times", "2 1/2 times", "2 3/4 times", "3 times"],
    correctAnswer: "2 times",
  },
  {
    question:
      "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",
    options: ["4 years", "8 years", "10 years", "None of these"],
    correctAnswer: "4 years",
  },
  {
    question:
      "A father said to his son, 'I was as old as you are at the present at the time of your birth.' If the father's age is 38 years now, the son's age five years back was:",
    options: ["14 years", "19 years", "33 years", "38 years"],
    correctAnswer: "14 years",
  },
  {
    question:
      "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
    options: ["7", "8", "9", "10", "11"],
    correctAnswer: "10",
  },
  {
    question:
      "Present ages of Sameer and Anand are in the ratio of 5:4 respectively. Three years hence, the ratio of their ages will become 11:9 respectively. What is Anand's present age in years?",
    options: ["24", "27", "40", "Cannot be determined", "None of these"],
    correctAnswer: "24",
  },
  {
    question:
      "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
    options: ["14 years", "18 years", "20 years", "22 years"],
    correctAnswer: "22 years",
  },
  {
    question:
      "Six years ago, the ratio of the ages of Kunal and Sagar was 6:5. Four years hence, the ratio of their ages will be 11:10. What is Sagar's age at present?",
    options: ["16 years", "18 years", "20 years", "Cannot be determined", "None of these"],
    correctAnswer: "16 years",
  },
  {
    question:
      "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
    options: ["12 years", "14 years", "18 years", "20 years"],
    correctAnswer: "20 years",
  },
  {
    question:
      "At present, the ratio between the ages of Arun and Deepak is 4:3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present?",
    options: ["12 years", "15 years", "19 and half", "21 years"],
    correctAnswer: "15 years",
  },
  {
    question:
      "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7:9, how old is Sachin?",
    options: ["16 years", "18 years", "28 years", "24.5 years"],
    correctAnswer: "24.5 years",
  },
  {
    question:
      "The present ages of three persons in proportions 4:7:9. Eight years ago, the sum of their ages was 56. Find their present ages (in years).",
    options: ["8, 20, 28", "16, 28, 36", "20, 35, 45", "None of these"],
    correctAnswer: "16, 28, 36",
  },
  {
    question:
      "Ayesha's father was 38 years of age when she was born while her mother was 36 years old when her brother four years younger to her was born. What is the difference between the ages of her parents?",
    options: ["2 years", "4 years", "6 years", "8 years"],
    correctAnswer: "6 years",
  },
  {
    question:
      "A person's present age is two-fifths of the age of his mother. After 8 years, he will be one-half of the age of his mother. How old is the mother at present?",
    options: ["32 years", "36 years", "40 years", "48 years"],
    correctAnswer: "40 years",
  },
  {
    question:
      "Q is as much younger than R as he is older than T. If the sum of the ages of R and T is 50 years, what is definitely the difference between R and Q's age?",
    options: ["1 year", "2 years", "25 years", "Data inadequate", "None of these"],
    correctAnswer: "Data inadequate",
  },
  {
    question:
      "The age of father 10 years ago was thrice the age of his son. Ten years hence, father's age will be twice that of his son. The ratio of their present ages is:",
    options: ["5:2", "7:3", "9:2", "13:2"],
    correctAnswer: "7:3",
  },
  {
    question:
      "What is Sonia's present age?\n\nI. Sonia's present age is five times Deepak's present age.\n\nII. Five years ago her age was twenty-five times Deepak's age at that time.",
    options: [
      "I alone sufficient while II alone not sufficient to answer",
      "II alone sufficient while I alone not sufficient to answer",
      "Either I or II alone sufficient to answer",
      "Both I and II are necessary to answer",
      "Both I and II are not sufficient to answer",
    ],
    correctAnswer: "Both I and II are necessary to answer",
  },
  {
    question:
      "Average age of employees working in a department is 30 years. In the next year, ten workers will retire. What will be the average age in the next year?\n\nI. Retirement age is 60 years.\n\nII. There are 50 employees in the department.",
    options: [
      "I alone sufficient while II alone not sufficient to answer",
      "II alone sufficient while I alone not sufficient to answer",
      "Both I and II are necessary to answer",
      "Either I or II alone sufficient to answer",
      "Both I and II are not sufficient to answer",
    ],
    correctAnswer: "Both I and II are necessary to answer",
  },
  {
    question:
      "Divya is twice as old as Shruti. What is the difference in their ages?   /n I. Five years hence, the ratio of their ages would be 9  :5.\n\nII. Ten years back, the ratio of their ages was 3:1.",
    options: [
      "I alone sufficient while II alone not sufficient to answer",
      "II alone sufficient while I alone not sufficient to answer",
      "Either I or II alone sufficient to answer",
      "Both I and II are not sufficient to answer",
      "Both I and II are necessary to answer",
    ],
    correctAnswer: "Either I or II alone sufficient to answer",
  },
  {
    question:
      "What is Arun's present age?\n\nI. Five years ago, Arun's age was double that of his son's age at that time.\n\nII. Present ages of Arun and his son are in the ratio of 11:6 respectively.\n\nIII. Five years hence, the respective ratio of Arun's age and his son's age will become 12:7.",
    options: [
      "Only I and II",
      "Only II and III",
      "Only I and III",
      "Any two of the three",
      "None of these",
    ],
    correctAnswer: "Any two of the three",
  },
  {
    question:
      "What is the present age of Tanya?\n\nI. The ratio between the present ages of Tanya and her brother Rahul is 3:4 respectively.\n\nII. After 5 years the ratio between the ages of Tanya and Rahul will be 4:5.\n\nIII. Rahul is 5 years older than Tanya.",
    options: [
      "Only I and II",
      "II and III only",
      "Only I and III",
      "Any two of the three",
      "None of these",
    ],
    correctAnswer: "Any two of the three",
  },
  {
    question:
      "What will be the ratio between ages of Sam and Albert after 5 years?\n\nI. Sam's present age is more than Albert's present age by 4 years.\n\nII. Albert's present age is 20 years.\n\nIII. The ratio of Albert's present age to Sam's present age is 5:6.",
    options: [
      "Any two of I, II and III",
      "II only",
      "III only",
      "I or III only",
      "II or III only",
    ],
    correctAnswer: "Any two of I, II and III",
  },
  {
    question:
      "What is the difference between the present ages of Ayush and Deepak?\n\nI. The ratio between Ayush's present age and his age after 8 years is 4:5.\n\nII. The ratio between the present ages of Ayush and Deepak is 4:3.\n\nIII. The ratio between Deepak's present age and his age four years ago is 6:5.",
    options: [
      "Any two of I, II and III",
      "I or III only",
      "Any one of the three",
      "All I, II and III are required",
      "Even with all I, II and III, the answer cannot be obtained.",
    ],
    correctAnswer: "Any two of I, II and III",
  },
  {
    question:
      "Father is four times the age of his daughter. If after 5 years, he would be three times of daughter’s age, then further after 5 years, how many times he would be of his daughter’s age?",
    options: ["1.5 times", "2 times", "2.5 times", "3 times"],
    correctAnswer: "2.5 times",
  },
  {
    question:
    "What is Aman's present age, if after 20 years his age will be 10 times his age 10 years back?",
    options: ["6.2 years", "7.7 years", "13.3 years", "10 years"],
    correctAnswer: "13.3 years",
  },
  {
    question:
      "Nisha is 15 years elder to Romi. If 5 years ago, Nisha was 3 times as old as Romi, then find Nisha’s present age.",
    options: ["32.5 years", "27.5 years", "25 years", "24.9 years"],
    correctAnswer: "27.5 years",
  },
  {
    question:
      "One year ago, the ratio of Honey and Piyush ages was 2:3 respectively. After five years from now, this ratio becomes 4:5. How old is Piyush now?",
    options: ["5 years", "25 years", "10 years", "15 years"],
    correctAnswer: "10 years",
  },
  {
    question:
      "Ten years ago, the age of mother was three times the age of her son. After ten years, mother’s age will be twice that of his son. Find the ratio of their present ages.",
    options: ["11:7", "9:5", "7:4", "7:3"],
    correctAnswer: "7:3",
  },
  {
    question:
      "Saransh is 50 years old and Nazma is 40 years old. How long ago was the ratio of their ages 3:2?",
    options: ["20 years", "30 years", "40 years", "25 years"],
    correctAnswer: "20 years",
  },
  {
    question:
      "The ratio of the present ages of Pranav and Qureshi is 4:5. Five years ago, the ratio of their ages was 7:9. Find their present ages? (In years)",
    options: ["40,50", "18,25", "40,60", "20,25"],
    correctAnswer: "40,50",
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