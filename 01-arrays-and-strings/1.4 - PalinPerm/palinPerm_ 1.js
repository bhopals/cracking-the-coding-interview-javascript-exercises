/***
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A Palindrome is a word or phrase that is the same forwards and backwards.
 * A Permutation is a rearrangement of letters. The palindrome does not
 * need to be limited to just dictionary words.
 *
 */
function palinPerm(str) {
  const obj = {};
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const val = str[i];
    if (val.trim() !== "") {
      obj[val] = obj[val] + 1 || 1;
    }
  }
  console.log(obj);
  const keys = Object.keys(obj);
  let count = 0;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === 1) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}

/**Test*/
console.log(palinPerm("Tact Coa"), "true");
console.log(palinPerm("Tact boa"), "false");
