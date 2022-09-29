// ============================== ROMAN TO INTEGER ==============================
// ============================== ROMAN TO INTEGER ==============================

/* 
Roman numerals are represented by 7 different symbols:
        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000

Given a roman numeral:
    - convert it into an integer

EXAMPLE:

input: s = "III"
output: 3
- III = 3

input s = "MCMXCIV"
output: 1994
- M = 1000, CM = 900, XC = 90, IV = 4
*/

// ===== HASH MAP
// TIME – O(n), SPACE – O(1)

var romanToInt = function (s) {
  // hash map with the given roman numerals + values
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // number to return
  let num = 0;

  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // s = III
    // curr = 1 (I = 1)
    // next = 1 (i + 1 = the next letter in the string, I = 1)

    // s = IV
    // curr = 1 (I = 1)
    // next = 5 (i + 1 = the next letter in the string, V = 5)

    // store the current letter and the one after it
    let curr = map[s[i]];
    let next = map[s[i + 1]];

    // add/subtract from num depending on the values
    if (curr < next) {
      num -= curr;
    } else {
      num += curr;
    }
  }

  // return num at the end, integer version of the roman numeral
  return num;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('IV')); // 4
console.log(romanToInt('MCMXCIV')); // 1994

/*
input: s = "III"
input: s = "IV"

    1) num = 0

    2) let curr = map[s[i]]
    - store the current letters value found in the map

    3) let next = map[s[i+1]]
    - store the next letters value found in the map

    4) if (curr < next) {
        num -= curr
    } else {
        num += curr
    }

    ("III")
    1st loop: (I, I)
    - 1 < 1 (false, num += curr), 0 + 1 = 1
    2nd loop: (I, I)
    - 1 < 1 (false, num += curr), 1 + 1 = 2
    3rd loop: (I, undefined)
    - 1 < undefined (false, num += curr), 2 + 1 = 3
    loop finished, return num

    ("IV")
    1st loop: (I, V)
    - 1 < 5 (true, num -= curr), 0 - 1 = -1
    2nd loop: (V, undefined)
    - 5 < undefined (false, num += curr), -1 + 5 = 4

output: 3
output: 4
*/
