/**
 * Question:
 * Given two strings, write a method to decide if one is a permutation of the other.
 */
function checkPermute(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

/* TESTS */
console.log(checkPermute("aba", "aab"), true);
console.log(checkPermute("aba", "aaba"), false);
console.log(checkPermute("aba", "aa"), false);
