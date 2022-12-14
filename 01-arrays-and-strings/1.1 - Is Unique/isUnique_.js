/**
 * Question:
 * Implement an algo to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
function everyCharUnique(value) {
  return new Set(value).size === value.length;
}

/* TESTS */
console.log(everyCharUnique("abcd"), "true");
console.log(everyCharUnique("abccd"), "false");
console.log(everyCharUnique("bhjjb"), "false");
console.log(everyCharUnique("mdjq"), "true");
