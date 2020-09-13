import { isoParse } from "d3";

const getRandomDate = (start, end, startHour, endHour) => {
  const date = new Date(+start + Math.random() * (end - start));
  const hour = (startHour + Math.random() * (endHour - startHour)) | 0; // eslint-disable-line
  date.setHours(hour);
  date.setMinutes(0);
  return date;
};

const getRandomInt = (minVal, maxVal) =>
  Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);

export const primaryBarData = new Array(100).fill(0).map(() => ({
  date: isoParse(getRandomDate(new Date(), new Date(), 0, 24)),
  value: getRandomInt(-1000, 8000)
}));

export const primaryLineData = new Array(100).fill(0).map(() => ({
  date: isoParse(getRandomDate(new Date(), new Date(), 0, 24)),
  value: getRandomInt(-1000, 8000)
}));
