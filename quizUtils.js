export function isYes(word) {
  const firstLetter = word.charAt(0).toLowerCase();

  if (firstLetter === "y") {
    return true;
  }
  return false;
}
