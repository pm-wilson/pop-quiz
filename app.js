// import functions and grab DOM elements
import { isYes, findPercent, checkPlural } from "./quizUtils.js";

const quizButton = document.getElementById("quiz-button"),
  quizGrade = document.getElementById("quiz-grade");

// initialize state
let quizCount = 0;

// set event listeners to update state and DOM
quizButton.addEventListener("click", () => {
  const quizName = prompt("What is your name?"),
    quizReady = confirm("Are you ready for this " + quizName + "?");

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
          ":\n Do you still need to check your helmet for damage if it was fine yesterday?"
      );

    quizCount++;

    if (isYes(quizAnswer1)) quizScore++;
    if (!isYes(quizAnswer2)) quizScore++;
    if (isYes(quizAnswer3)) quizScore++;

    quizGrade.textContent =
      quizName +
      " you have taken this quiz " +
      quizCount +
      " time" +
      checkPlural(quizCount) +
      ". You scored " +
      quizScore +
      " for a " +
      findPercent(quizScore, 3) +
      "%!";
  }
});
