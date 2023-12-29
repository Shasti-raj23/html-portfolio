const allquestions = [
    {
        question: "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
        options: ["39, 30", "41, 32", "42, 33", "43, 34"],
        correctAnswer: "42, 33",
    },
    {
        question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
        options: ["588 apples", "600 apples", "672 apples","700 apples"],
        correctAnswer: "700 apples",
    },
    {
        question: "What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
        options: ["1", "14", "20", "21"],
        correctAnswer: "20",
    },
    {
        question: "If A = x% of y and B = y% of x, then which of the following is true?",
        options: ["A is smaller than B.", "A is greater than B", "If x is smaller than y, then A is greater than B", "None of these"],
        correctAnswer: "None of these",
    },
    {
        question: "If 20% of a = b, then b% of 20 is the same as:",
        options: ["4% of a", "5% of a", "20% of a", "None of these"],
        correctAnswer: "4% of a",
    },
    {
        question: "In a certain school, 20% of students are below 8 years of age. The number of students above 8 years of age is  of the number of students of 8 years of age which is 48. What is the total number of students in the school?",
        options: ["72", "120", "150", "100"],
        correctAnswer: "100",
    },
    {
        question: "Two numbers A and B are such that the sum of 5% of A and 4% of B is two-third of the sum of 6% of A and 8% of B. Find the ratio of A : B.	Two numbers A and B are such that the sum of 5% of A and 4% of B is two-third of the sum of 6% of A and 8% of B. Find the ratio of A : B.",
        options: [ "1 : 1",	"3 : 4","4 : 3", "4:2"],
        correctAnswer: "4 : 3",
    },
    {
        question: "A student multiplied a number by 3/5instead of 5/3.What is the percentage error in the calculation?",
        options: ["34%","44%","54%","64%"],
        correctAnswer: "64%",
    },
    {
        question: "In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid. If the total number of votes was 7500, the number of valid votes that the other candidate got, was:",
        options: ["2700","2900","3000",	"3100"],
        correctAnswer: "2700",
    },
    {
        question: "Three candidates contested an election and received 1136, 7636 and 11628 votes respectively. What percentage of the total votes did the winning candidate get?",
        options: ["57%", "60%", "65%", "90%"],
        correctAnswer: "57%",
    },
    {
        question: "Two tailors X and Y are paid a total of Rs. 550 per week by their employer. If X is paid 120 percent of the sum paid to Y, how much is Y paid per week?",
        options: ["Rs. 200", "Rs. 250", "Rs. 300", "None of these"],
        correctAnswer: "Rs. 250",
    },
    {
        question: "Gauri went to the stationers and bought things worth Rs. 25, out of which 30 paise went on sales tax on taxable purchases. If the tax rate was 6%, then what was the cost of the tax free items?",
        options: ["Rs. 15", "Rs. 15.70", "Rs. 19.70", "Rs. 20"],
        correctAnswer: "Rs. 19.70",
    },
    {
        question: "Rajeev buys good worth Rs. 6650. He gets a rebate of 6% on it. After getting the rebate, he pays sales tax @ 10%. Find the amount he will have to pay for the goods.",
        options: ["Rs. 6876.10", "Rs. 6999.20", "Rs. 6654", "Rs. 7000"],
        correctAnswer: "Rs. 6876.10",
    },
    {
        question: "The population of a town increased from 1,75,000 to 2,62,500 in a decade. The average percent increase of population per year is:",
        options: ["4.37%", "5%", "6%", "8.75%"],
        correctAnswer: "5%",
    },
    {
        question: "A shirt originally costs $60. If it is sold at a 25% discount, what is the sale price?",
        options: ["$40", "$45", "$50", "$55"],
        correctAnswer: "$50",
    },
    {
        question: "If a student answers 80% of the questions correctly on a 50-question test, how many questions did the student answer correctly?",
        options: ["30", "35", "40", "45"],
        correctAnswer: "40",
    },
    {
        question: "The population of a town increased from 10,000 to 12,000 in one year. What is the percentage increase?",
        options: ["10%", "15%", "20%", "25%"],
        correctAnswer: "15%",
    },
    {
        question: "If a product's price increases by 15% and is now $115, what was its original price?",
        options: ["$100", "$110", "$120", "$125"],
        correctAnswer: "$110",
    },
    {
        question: "A store offers a 40% discount on a pair of shoes. If the discounted price is $48, what was the original price?",
        options: ["$50", "$60", "$70", "$80"],
        correctAnswer: "$60",
    },
    {
        question: "If the price of a smartphone decreases by 20%, how much money can you save if the original price was $400?",
        options: ["$60", "$80", "$100", "$120"],
        correctAnswer: "$100",
    },
    {
        question: "A company's revenue increased by 12% last year and decreased by 8% this year. What is the net percentage change in revenue over these two years?",
        options: ["2% increase", "4% increase", "2% decrease", "4% decrease"],
        correctAnswer: "4% increase",
    },
    {
        question: "If the price of a laptop decreases by 10% and is now $900, what was the original price?",
        options: ["$810", "$1,000", "$990", "$950"],
        correctAnswer: "$1,000",
    },
    {
        question: "A company's profits increased by 5% in the first quarter and decreased by 3% in the second quarter. What is the net percentage change in profits over these two quarters?",
        options: ["2% increase", "2% decrease", "1% increase", "1% decrease"],
        correctAnswer: "2% decrease",
    },
    {
        question: "If 80% of students passed a test, and there are 120 students in the class, how many students failed?",
        options: ["12", "24", "36", "48"],
        correctAnswer: "24",
    },
    {
        question: "In a survey, 45% of people prefer tea, and the rest prefer coffee. If 90 people prefer coffee, how many people were surveyed in total?",
        options: ["150", "180", "200", "240"],
        correctAnswer: "180",
    },
    {
        question: "A recipe calls for 30% sugar, and you need 600 grams of sugar for the recipe. How many grams of sugar should you use?",
        options: ["120 grams", "180 grams", "200 grams", "220 grams"],
        correctAnswer: "180 grams",
    },
    {
        question: "In a classroom, 25% of the students have blue eyes. If there are 32 students with blue eyes, how many students are in the classroom?",
        options: ["64", "96", "128", "160"],
        correctAnswer: "96",
    },
    {
        question: "If a company's profit margin is 15%, and its revenue is $800,000, what is the company's profit?",
        options: ["$80,000", "$120,000", "$160,000", "$200,000"],
        correctAnswer: "$160,000",
    },
    {
        question: "In a charity event, 40% of the donated funds were used for food expenses. If $2,400 was spent on food, how much money was donated in total?",
        options: ["$4,000", "$5,000", "$6,000", "$8,000"],
        correctAnswer: "$5,000",
    },
    {
        question: "A class has 35 students, and 25% of them play a musical instrument. How many students in the class play a musical instrument?",
        options: ["7", "10", "14", "21"],
        correctAnswer: "10",
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
