// IMPORT MODULES under test here:
// import example from '../example.js';
import { isYes } from "../quizUtils.js";

const test = QUnit.test;

test("if first letter is y test to true to indicate a yes response", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const word = "yes",
    word2 = "Yes",
    word3 = "yeah",
    word4 = "y",
    word5 = "Y",
    word6 = "yeehaw",
    word7 = "Yep";

  const expected = true;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = isYes(word),
    actual2 = isYes(word2),
    actual3 = isYes(word3),
    actual4 = isYes(word4),
    actual5 = isYes(word5),
    actual6 = isYes(word6),
    actual7 = isYes(word7);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
  expect.equal(actual2, expected);
  expect.equal(actual3, expected);
  expect.equal(actual4, expected);
  expect.equal(actual5, expected);
  expect.equal(actual6, expected);
  expect.equal(actual7, expected);
});

test("if first letter is not y test to false to indicate a no response", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const word = "no",
    word2 = "NO",
    word3 = "no way",
    word4 = "not on your life",
    word5 = "N",
    word6 = "n",
    word7 = "";

  const expected = false;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = isYes(word),
    actual2 = isYes(word2),
    actual3 = isYes(word3),
    actual4 = isYes(word4),
    actual5 = isYes(word5),
    actual6 = isYes(word6),
    actual7 = isYes(word7);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
  expect.equal(actual2, expected);
  expect.equal(actual3, expected);
  expect.equal(actual4, expected);
  expect.equal(actual5, expected);
  expect.equal(actual6, expected);
  expect.equal(actual7, expected);
});
