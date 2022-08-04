/**
 * Question:
 * Implement an algo to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
function everyCharUnique(value) {
  const obj = {};
  const strArr = value.split("");
  for (const str of strArr) {
    if (obj[str]) {
      return false;
    }
    obj[str] = true;
  }
  return true;
}

/* TESTS */
console.log(everyCharUnique("abcd"), "true");
console.log(everyCharUnique("abccd"), "false");
console.log(everyCharUnique("bhjjb"), "false");
console.log(everyCharUnique("mdjq"), "true");
