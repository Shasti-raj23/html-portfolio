const allquestions = [
    {
        question: "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
        options: ["3.6 km/hr", "7.2 km/hr", "8.4 km/hr", "10 km/hr"],
        correctAnswer: "7.2 km/hr",
      },
      {
        question: "If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:",
        options: ["50 kmph", "56 kmph", "70 kmph", "80 kmph"],
        correctAnswer: "50 kmph",
      },
      {
        question: "An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hour, it must travel at a speed of:",
        options: ["300 kmph", "360 kmph", "600 kmph", "720 kmph"],
        correctAnswer: "720 kmph",
      },
      {
        question: "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
        options: ["100 kmph", "110 kmph", "120 kmph", "130 kmph"],
        correctAnswer: "120 kmph",
      },
      {
        question: "Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
        options: ["9 min", "10 min", "12 min", "20 min"],
        correctAnswer: "10 min",
      },
      {
        question: "In a flight of 600 km, an aircraft was slowed down due to bad weather. Its average speed for the trip was reduced by 200 km/hr and the time of flight increased by 30 minutes. The duration of the flight is:",
        options: ["1 hr", "2 hr", "3 hr", "4 hr"],
        correctAnswer: "1 hr",
      },
      {
        question: "A man completes a journey in 10 hours. He travels the first half of the journey at the rate of 21 km/hr and the second half at the rate of 24 km/hr. Find the total journey in km.",
        options: ["220 km", "224 km", "234 km", "230 km"],
        correctAnswer: "224 km",
      },
      {
        question: "The ratio between the speeds of two trains is 7:8. If the second train runs 400 km in 4 hours, then the speed of the first train is:",
        options: ["70 km/hr", "75 km/hr", "84 km/hr", "87.5 km/hr"],
        correctAnswer: "87.5 km/hr",
      },
      {
        question: "A man on tour travels first 160 km at 64 km/hr and the next 160 km at 80 km/hr. The average speed for the first 320 km of the tour is:",
        options: ["35.55 km/hr", "36 km/hr", "71.11 km/hr", "71 km/hr"],
        correctAnswer: "71.11 km/hr",
      },
      {
        question: "In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhay's speed is:",
        options: ["5 km/hr", "6 km/hr", "6.25 km/hr", "7.5 km/hr"],
        correctAnswer: "6 km/hr",
      },
      {
        question: "A car traveling with 1/6 of its actual speed covers 42 km in 1 hr 40 min 48 sec. Find the actual speed of the car.",
        options: ["17/6 km/hr", "25 km/hr", "30 km/hr", "35 km/hr"],
        correctAnswer: "35 km/hr",
      },
      {
        question: "Robert is traveling on his cycle and has calculated to reach point A at 2 P.M. If he travels at 10 kmph, he will reach there at 12 noon; if he travels at 15 kmph, he will reach at 1 P.M. At what speed must he travel to reach A at 1 P.M.?",
        options: ["8 km/hr", "11 km/hr", "12 km/hr", "14 km/hr"],
        correctAnswer: "12 km/hr",
      },
      {
        question: "It takes eight hours for a 600 km journey. If 120 km is done by train and the rest by car, it takes 20 minutes more, if 200 km is done by train and the rest by car. The ratio of the speed of the train to that of the cars is:",
        options: ["2:3", "3:2", "3:4", "4:3"],
        correctAnswer: "3:4",
      },
      {
        question: "A farmer traveled a distance of 61 km in 9 hours. He traveled partly on foot @ 4 km/hr and partly on a bicycle @ 9 km/hr. The distance traveled on foot is:",
        options: ["14 km", "15 km", "16 km", "17 km"],
        correctAnswer: "16 km",
      },
      {
        question: "A man covered a certain distance at some speed. Had he moved 3 kmph faster, he would have taken 40 minutes less. If he had moved 2 kmph slower, he would have taken 40 minutes more. The distance (in km) is:",
        options: ["35 km", "36 2/3 km", "37 1/2 km", "40 km"],
        correctAnswer: "40 km",
      },
      {
        question: "A train starts from station X at the rate of 60 km/hr and reaches station Y in 45 minutes. If the speed is reduced by 6 km/hr, how much more time will the train take to return from station Y to station X?",
        options: ["4 min", "5 min", "6 min", "7 min"],
        correctAnswer: "5 min",
      },
      {
        question: "An aeroplane travels distances 2500 km, 1200 km, and 500 km at the rate of 500 km/hr, 400 km/hr, and 250 km/hr, respectively. The average speed (in km/hr) is",
        options: ["405", "410", "400", "420"],
        correctAnswer: "420",
      },
      {
        question: "Sound travels at 330 meters a second. How many kilometers away is a thunder cloud when its sound follows the flash after 10 seconds?",
        options: ["3", "3.3", "0.33", "33"],
        correctAnswer: "3.3",
      },
      {
        question: "Shiela’s house is 10 km away from the school. She takes 30 minutes to reach the school by bus. If Ram travels from his house at the same speed as that of Shiela and takes only 12 minutes to reach the school, the distance between Ram’s house and his school (in Km) is",
        options: ["2 km", "4 km", "5 km", "6 km"],
        correctAnswer: "4 km",
      },
      {
        question: "Anita and Veena are running in opposite directions. Speed of Anita and Veena is 8 km/hr and 10 km/hr respectively. Find out the distance between them after 2 1/2 hrs",
        options: ["30 km", "36 km", "40 km", "45 km"],
        correctAnswer: "45 km",
      },
      {
        question: "A car covers 650 km in 12 hours and others 850 km in 18 hours. Find the average speed of the car.",
        options: ["47 kmph", "48 kmph", "50 kmph", "52 kmph"],
        correctAnswer: "52 kmph",
      },
      {
        question: "Suresh is walking at a speed of 10 kilometers per hour. After every kilometer, he takes rest for 5 minutes. The time taken to cover a distance of 5 kilometers by Suresh is",
        options: ["30 min", "35 min", "45 min", "50 min"],
        correctAnswer: "50 min",
      },
      {
        question: "A man crosses a street 600 m long in 5 minutes. His speed in km per hour is",
        options: ["3.6 km/hr", "7.2 km/hr", "8.4 km/hr", "10 km/hr"],
        correctAnswer: "7.2 km/hr",
      },
      {
        question: "A person walks at 5 km/hr for 6 hours and at 4 km/hr for 12 hours. The average speed of the man is",
        options: ["2 km/hr", "4 km/hr", "4 1/3 km/hr", "4 2/3 km/hr"],
        correctAnswer: "4 km/hr",
      },
      {
        question: "A walks at a uniform rate of 4 km an hour and 4 hours after his start, B bicycles after him at the uniform rate of 10 km an hour. How far from the starting point will B catch A?",
        options: ["18.7 km", "19.6 km", "26.7 km", "28.5 km"],
        correctAnswer: "26.7 km",
      },
      {
        question: "A bus is moving with a speed of 30 km/hr ahead of a car with a speed of 50 km/hr. How many kilometers apart are they if it takes 15 minutes for the car to catch up with the bus?",
        options: ["3 km", "5 km", "7.5 km", "12 km"],
        correctAnswer: "5 km",
      },
      {
        question: "Priya goes to school from her house in 30 minutes. Siva takes 45 minutes in covering the same distance. Find the ratio between the time taken by Priya and Siva.",
        options: ["1:3", "2:3", "3:2", "4:3"],
        correctAnswer: "2:3",
      },
      {
        question: "If a man covers 10.2 km in 3 hours, the distance covered by him in 5 hours is",
        options: ["15 km", "16 km", "17 km", "18 km"],
        correctAnswer: "17 km",
      },
      {
        question: "Prasanna runs at 15.6 km/hr. How many meters does he run in 2 minutes?",
        options: ["240 m", "260 m", "312 m", "520 m"],
        correctAnswer: "520 m",
      },
      {
        question: "A man covered a distance of 180 km in 4 hours on a bike. How much distance will he cover on a bicycle in 8 hours if he rides the bicycle at one-sixth the speed of the bike?",
        options: ["54 km", "56 km", "60 km", "72 km"],
        correctAnswer: "60 km",
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