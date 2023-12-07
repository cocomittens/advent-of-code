import { data } from "../data/day2.js";

const isValid = (num, type) => {
  switch (type) {
    case "red":
      return num <= 12;
    case "green":
      return num <= 13;
    case "blue":
      return num <= 14;
  }
};

const processGame = (game) => {
  const idRegex = /(\d+):/;
  const colorRegex = /(\d+)\s*(green|blue|red)/g;
  const id = game.match(idRegex)[1];
  const matches = [...game.matchAll(colorRegex)];

  let value = parseInt(id);

  matches.forEach((match) => {
    const number = match[1];
    const color = match[2];
    if (!isValid(number, color)) value = 0;
  });

  return value;
};

const processGames = (games) => {
  return games.map((game) => processGame(game)).reduce((a, c) => a + c);
};

export const calculateDay2 = () => {
  return processGames(data);
};
