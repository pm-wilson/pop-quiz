// import functions and grab DOM elements
import isYes from "./quizUtils";

const quizButton = document.getElementById("quiz-button"),
  quizGrade = document.getElementById("quiz-grade");

// initialize state
let quizCount = 0;

// set event listeners to update state and DOM
quizButton.addEventListener("click", () => {
  const quizName = prompt("What is your name?"),
    quizReady = confirm("Are you ready for this?");

  let quizScore = 0;

  if (quizReady) {
    const quizAnswer1 = prompt(
        "Ok " +
          quizName +
          " here is the first question: \n Was the bicycle originally known as the 'safety bicycle'?"
      ),
      quizAnswer2 = prompt(
        "Thanks " +
          quizName +
          "next question: \n Would a tandem bike be the best bicycle for doing flips and tricks in an empty swimming pool?"
      ),
      quizAnswer3 = prompt(
        "Last question " +
          quizName +
          ":\n Do you need to check your helmet for damage if it was fine yesterday?"
      );

    quizCount++;

    quizGrade.textContent =
      quizName + " you scored " + quizAnswer1 + quizAnswer2 + quizAnswer3;
  }
});
