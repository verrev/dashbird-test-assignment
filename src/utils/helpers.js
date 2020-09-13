export const getAverage = (array) =>
  array.reduce((a, b) => a + b) / array.length;

export default getAverage;
