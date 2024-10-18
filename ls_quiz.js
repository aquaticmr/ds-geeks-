const questions = [
  {
    question: "What is the primary purpose of a linear search algorithm?",
    answers: [
      { text: "Sort an array", correct: false },
      { text: "Find an element in an array", correct: true },
      { text: "Merge two arrays", correct: false },
      { text: "Reverse an array", correct: false },
    ],
  },
  {
    question: "In a linear search, what is the worst-case time complexity?",
    answers: [
      { text: "O(1)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(n)", correct: true },
      { text: "O(n^2)", correct: false },
    ],
  },
  {
    question: "Which of the following is true about linear search?",
    answers: [
      {
        text: "It is faster than binary search on sorted arrays",
        correct: false,
      },
      { text: "It is always faster than binary search", correct: false },
      {
        text: "It can be used on both sorted and unsorted arrays",
        correct: true,
      },
      { text: "It requires the array to be sorted", correct: false },
    ],
  },
  {
    question:
      "If you are looking for an element in an unsorted array of size 10 using linear search, what is the maximum number of comparisons needed?",
    answers: [
      { text: "10", correct: true },
      { text: "5", correct: false },
      { text: "1", correct: false },
      { text: "9", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
