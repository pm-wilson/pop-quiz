// IMPORT MODULES under test here:
// import example from '../example.js';
import { isYes, findPercent, checkPlural } from "../quizUtils.js";

const test = QUnit.test;
test("function should return a 's' if the number is not 1 and '' if number is 1", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const num = 1,
    num2 = 2,
    num3 = 3,
    num4 = 0;

  const expected = "",
    expected2 = "s",
    expected3 = "s",
    expected4 = "s";

  //Act
  // Call the function you're testing and set the result to a const
  const actual = checkPlural(num);
  const actual2 = checkPlural(num2);
  const actual3 = checkPlural(num3);
  const actual4 = checkPlural(num4);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
  expect.equal(actual2, expected2);
  expect.equal(actual3, expected3);
  expect.equal(actual4, expected4);
});

test("function should return a 2 digit number representing the percent of the num divided by the outOf numbers", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const num = 1,
    outOf = 3,
    num2 = 2,
    outOf2 = 3,
    num3 = 3,
    outOf3 = 3,
    num4 = 0,
    outOf4 = 3;

  const expected = 33,
    expected2 = 66,
    expected3 = 100,
    expected4 = 0;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = findPercent(num, outOf);
  const actual2 = findPercent(num2, outOf2);
  const actual3 = findPercent(num3, outOf3);
  const actual4 = findPercent(num4, outOf4);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual, expected);
  expect.equal(actual2, expected2);
  expect.equal(actual3, expected3);
  expect.equal(actual4, expected4);
});

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
