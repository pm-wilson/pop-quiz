export function isYes(word) {
  const firstLetter = word.toLowerCase().charAt(0);

  if (firstLetter === "y") return true;
  return false;
}

export function findPercent(num, outOf) {
  const percent = (num / outOf) * 100;

  return Math.floor(percent);
}

export function checkPlural(num) {
  if (num === 1) return "";
  return "s";
}
