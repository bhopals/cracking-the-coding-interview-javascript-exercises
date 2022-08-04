/***
 * Assume you have a method `isSubstring` which checks if one word is a substring of another.
 * Given two string `s1` and `s2`, write code to check if s2 is a rotation of s1 using only one call
 * to `isSubstring(e.g., "waterbottle" is a rotation of "erbottlewat")`
 *
 */

function stringRotation(str1, str2) {}

/*** TEST */
console.log(stringRotation("waterbottle", "erbottlewat"), true);
console.log(stringRotation("waterbottle", "erbotlewatt"), false);
console.log(stringRotation("aaata", "aataa"), true);
