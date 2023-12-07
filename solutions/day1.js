import { data } from "../data/day1.js";
import { Trie } from "../util/trie.js";

const wordStrings = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const wordDigits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function isNum(char) {
  return /^\d$/.test(char);
}

const calculateCalibrations = () => {
  const wordTrie = new Trie();
  for (const num of wordStrings) {
    wordTrie.insert(num);
  }

  return data.map((item) => {
    let wordStr = "";
    let first = null;
    let last = null;

    for (let i = 0; i < item.length; i++) {
      wordStr += item[i];

      if (wordTrie.search(wordStr)) {
        if (first === null) first = wordDigits[wordStr].toString();
        last = wordDigits[wordStr].toString();
      }

      if (isNum(item[i])) {
        if (first === null) first = item[i];
        last = item[i];
      }
    }

    return parseInt(first + last);
  });
};

export const calculateDay1 = () => {
  const calibrations = calculateCalibrations();
  const sum = calibrations.reduce((a, c) => a + c);
  return sum;
};
