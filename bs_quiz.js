const questions = [
    {
      question: "What is the advantage of binary search over linear search?",
      
      answers: [
        { text: "Can search sorted and unsorted data", correct: false },
        { text: "Faster for large datasets", correct: true },
        { text: "Works for any data type", correct: false },
        { text: "Easier to implement", correct: false },
      ],
    },
    {
      question: "What is the time complexity of binary search in the worst case?",
      answers: [
        { text: "O(n)", correct: false },
        { text: "O(n log n)", correct: false },
        { text: "O(log n)", correct: true },
        { text: "O(n^2)", correct: false },
      ],
    },
    {
      question: "In binary search, if the target element is greater than the middle element of the current subarray, what happens next?",
      answers: [
        {
          text: "Search the left half",
          correct: false,
        },
        { text: "Search the right half", correct: true },
        {
          text: "Search both halves",
          correct: false,
        },
        { text: "Terminate the search", correct: false },
      ],
    },
    {
      question:
        "Binary search can be applied to which of the following data structures?",
      answers: [
        { text: "Sorted array", correct: true },
        { text: "Unsorted array", correct: false },
        { text: "Linked list", correct: false },
        { text: "Hash table", correct: false },
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
  