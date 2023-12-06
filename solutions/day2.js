import { data } from "../data/day2.js";

const isValid = (num, type) => {
  switch (type) {
    case "r":
      return num <= 12;
    case "g":
      return num <= 13;
    case "b":
      return num <= 14;
  }
};

const processGame = (game) => {};

const processGames = (games) => {};

export const calculateDay2 = () => {
  return processGames(data);
};
