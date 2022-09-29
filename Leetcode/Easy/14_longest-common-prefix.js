// ============================== LONGEST COMMON PREFIX ==============================
// ============================== LONGEST COMMON PREFIX ==============================

/* 
Given an array of strings:
    - write a function to find the longest common prefix amongst them
    - if there is no common prefix, return an empty string ""

EXAMPLE:

input: strs = ["flower", "flow", "flight"]
output: "fl"

input: strs = ["dog", "racecar", "car"]
output: ""
*/

// ===== INDEX OF, SUBSTRING
// TIME – O(m * n), SPACE – O(1)
// m = length of the shortest word
// n = length of the given array

var longestCommonPrefix = function (strs) {
  // if the array is empty, no common prefix
  if (!strs.length) return '';

  // first assumed longest prefix is the first string
  let prefix = strs[0];
  // loop from the second element as the first is already set as the prefix
  for (let i = 1; i < strs.length; i++) {
    // if the prefix does not exist in the str, it will return -1
    while (strs[i].indexOf(prefix) !== 0) {
      // so while the prefix doesn't exist in the str, cut the last letter from the word until it does exist
      // flower - flow - flight
      // flowe - flow - flight
      // flow - flow - flight
      // flo - flow - flight
      // fl - flow - flight
      // fl - (fl)ow - (fl)ight
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ""
