const data = [
  [45, 305],
  [97, 1062],
  [72, 1110],
  [95, 1695],
];

const isWin = (speed, time, distance) => {
  return speed * time >= distance;
};

const processRace = (race) => {
  let start = null;
  let end = null;
  let i = 1;
  const time = race[0];
  const distance = race[1];

  while (!end && i <= time) {
    const win = isWin(i, time - i, distance);
    if (win && !start) {
      start = i;
    }
    if (!win && start) {
      end = i;
    }
    i++;
  }

  return end - start;
};

const processRaces = (races) => {
  const times = races.map((race) => processRace(race));
  return times.reduce((a, c) => a * c);
};

export const calculateDay6 = () => {
  return processRaces(data);
};
