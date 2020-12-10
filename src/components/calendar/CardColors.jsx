export const getColor = () => {
  const colors = [
    {
      background: "hsla(88, 28%, 57%, 1)",
      text: "white",
    },
    {
      background: "hsla(107, 21%, 41%, 1)",
      text: "white",
    },
    {
      background: "hsla(45, 100%, 89%, 1)",
      text: "black",
    },
    {
      background: "hsla(35, 100%, 82%, 1)",
      text: "black",
    },
    {
      background: "hsla(0, 57%, 49%, 1)",
      text: "white",
    },
    {
      background: "hsla(358, 84%, 34%, 1)",
      text: "white",
    },
  ];
  const index = Math.round(Math.random() * (colors.length - 1));
  return colors[index];
};
