/***
 * There are three types of edits that can be performed on strings:
 *  - insert a character
 *  - remove a character
 *  - replace a character
 *
 * Given two strings write a function to check if they are ONE edit (or ZERO edits) away.
 *
 */
function oneAway(str1, str2) {
  function isInsert() {
    let response = false;
    if (str1.length !== str2.length + 1) {
      response = false;
    } else {
      for (let i = 0; i < str2.length; i++) {}
    }

    console.log("isInsert>>>>:", response);
    return response;
  }
  function isReplace() {
    let response = false;

    console.log("isReplace:", response);
    return response;
  }
  function isDelete() {
    let response = false;

    console.log("isDelete:", response);
    return response;
  }

  return isInsert() && isReplace() && isDelete();
}

/*** TEST */
console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);
