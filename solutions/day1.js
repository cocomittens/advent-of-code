import { data } from "../data/day1.js";
import { Trie, TrieNode } from "../util/trie.js";

const wordDigits = new Set([
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
]);

function isNum(char, wordString) {
  return /^\d$/.test(char) || wordDigits.has(wordString);
}

const calculateCalibrations = () => {
  return data.map((item) => {
    let first = null;
    let last = null;
    let i = 0;
    let j = item.length - 1;
    while (!first) {
      if (isNum(item[i])) first = item[i];
      i++;
    }
    while (!last) {
      if (isNum(item[j])) last = item[j];
      j--;
    }
    return parseInt(first + last);
  });
};

export const calculateAnswer = () => {
  const wordTrie = new Trie();
  for (const num of wordDigits) {
    wordTrie.insert(num);
  }
  const calibrations = calculateCalibrations();
  const sum = calibrations.reduce((a, c) => a + c);
  return sum;
};
