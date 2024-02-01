document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("startBtn");
  const quizForm = document.getElementById("quizForm");
  const questionsContainer = document.getElementById("questionsContainer");
  const addQuestionBtn = document.getElementById("addQuestionBtn");
  const submitBtn = document.getElementById("submitBtn");

  let currentQuestion = 1;
  let numQuestions;
  const customQuiz = [];

  startBtn.addEventListener("click", function () {
    numQuestions = parseInt(prompt("Enter the number of questions for your custom quiz:"));

    startBtn.style.display = "none";
    quizForm.classList.remove("hidden");
    showNextQuestion();
  });

  function showNextQuestion() {
    const questionDiv = document.createElement("div");
    questionDiv.innerHTML = `
      <label class="form-label" for="question${currentQuestion}">Question ${currentQuestion}:</label>
      <input class="form-control" type="text" id="question${currentQuestion}" required>
      <label class="form-label" for="options${currentQuestion}">Options:</label>
      <input class="form-control" type="text" id="options${currentQuestion}1" placeholder="Option 1" required>
      <input class="form-control" type="text" id="options${currentQuestion}2" placeholder="Option 2" required>
      <input class="form-control" type="text" id="options${currentQuestion}3" placeholder="Option 3" required>
      <input class="form-control" type="text" id="options${currentQuestion}4" placeholder="Option 4" required>
      <label class="form-label" for="correctAnswer${currentQuestion}">Correct Answer:</label>
      <input class="form-control" type="text" id="correctAnswer${currentQuestion}" required>
    `;
    questionsContainer.appendChild(questionDiv);

    if (currentQuestion >= numQuestions) {
      addQuestionBtn.disabled = true;
      submitBtn.classList.remove("hidden");
      submitBtn.disabled = false; // Enable the submit button when all questions are added
    }
  }

  addQuestionBtn.addEventListener("click", function () {
    const questionText = document.getElementById(`question${currentQuestion}`).value;
    const options = [
      document.getElementById(`options${currentQuestion}1`).value,
      document.getElementById(`options${currentQuestion}2`).value,
      document.getElementById(`options${currentQuestion}3`).value,
      document.getElementById(`options${currentQuestion}4`).value,
    ];
    const correctAnswer = document.getElementById(`correctAnswer${currentQuestion}`).value;
    const question = {
      question: questionText,
      options: options,
      correctAnswer: correctAnswer,
    };

    customQuiz.push(question);
    currentQuestion++;
    showNextQuestion();
  });

  submitBtn.addEventListener("click", function () {
    // Collect data from input fields and create the custom quiz array
    const submittedQuiz = [];

    for (let i = 1; i <= numQuestions; i++) {
      const questionText = document.getElementById(`question${i}`).value;
      const options = [
        document.getElementById(`options${i}1`).value,
        document.getElementById(`options${i}2`).value,
        document.getElementById(`options${i}3`).value,
        document.getElementById(`options${i}4`).value,
      ];
      const correctAnswer = document.getElementById(`correctAnswer${i}`).value;

      const question = {
        question: questionText,
        options: options,
        correctAnswer: correctAnswer,
      };

      submittedQuiz.push(question);
    }

    console.log("Submitted Quiz:", submittedQuiz);
    // You can now use the submittedQuiz array as needed
  });
});
