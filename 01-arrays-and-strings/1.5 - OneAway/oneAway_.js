/***
 * There are three types of edits that can be performed on strings:
 *  - insert a character
 *  - remove a character
 *  - replace a character
 *
 * Given two strings write a function to check if they are ONE edit (or ZERO edits) away.
 *
 */
function oneAway(str1, str2) {}

/*** TEST */
console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);
