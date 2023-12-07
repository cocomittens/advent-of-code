import { data } from "../data/day6";

const processRace = (race) => {
  return 1;
};

const processRaces = (races) => {
  const times = races.map((race) => processRace(race));
  return times.reduce((a, c) => a * c);
};

export const calculateDay6 = () => {
  return processRaces(data);
};