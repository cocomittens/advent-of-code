import { data } from "../data/day1.js";

function isNum(char) {
  return /^\d$/.test(char);
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
  const calibrations = calculateCalibrations();
  const sum = calibrations.reduce((a, c) => a + c);
  return sum;
};
