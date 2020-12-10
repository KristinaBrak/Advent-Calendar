const getCoordinate = () => {
  const maxWinSize = document.documentElement.clientHeight + 200;
  const coordinate = Math.random() * maxWinSize;
  return Math.round(coordinate);
};

const refreshText = "Reset";
export const data = [
  {
    key: 0,
    text: refreshText,
    hidden: false,
    position: {
      x: 10,
      y: 10,
    },
  },
  {
    key: 1,
    text: refreshText,
    hidden: true,
    position: {
      x: getCoordinate(),
      y: getCoordinate(),
    },
  },
  {
    key: 2,
    text: refreshText,
    hidden: true,
    position: {
      x: getCoordinate(),
      y: getCoordinate(),
    },
  },
  {
    key: 3,
    text: refreshText,
    hidden: true,
    position: {
      x: getCoordinate(),
      y: getCoordinate(),
    },
  },
  {
    key: 4,
    text: refreshText,
    hidden: true,
    position: {
      x: getCoordinate(),
      y: getCoordinate(),
    },
  },
  {
    key: 5,
    text: refreshText,
    hidden: true,
    position: {
      x: getCoordinate(),
      y: getCoordinate(),
    },
  },
  {
    key: 6,
    text: refreshText,
    hidden: true,
    position: {
      x: getCoordinate(),
      y: getCoordinate(),
    },
  },
  {
    key: 7,
    text: refreshText,
    hidden: true,
    position: { x: 10, y: 10 },
  },
];
