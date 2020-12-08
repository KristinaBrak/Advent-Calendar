import React, { useState } from "react";
import Card from "./card/Card";
import Title from "./title/Title";
import CalendarStyle from "./CalendarStyle";

const getColor = () => {
  const colors = [
    {
      background: "hsla(88, 28%, 57%, 1)",
      darkBackground: "hsla(88, 28%, 20%, 1)",
      text: "white",
    },
    {
      background: "hsla(107, 21%, 41%, 1)",
      darkBackground: "hsla(107, 21%, 20%, 1)",
      text: "white",
    },
    {
      background: "hsla(45, 100%, 89%, 1)",
      darkBackground: "hsla(45, 100%, 20%, 1)",
      text: "black",
    },
    {
      background: "hsla(35, 100%, 82%, 1)",
      darkBackground: "hsla(35, 100%, 20%, 1)",
      text: "black",
    },
    {
      background: "hsla(0, 57%, 49%, 1)",
      darkBackground: "hsla(0, 57%, 20%, 1)",
      text: "white",
    },
    {
      background: "hsla(358, 84%, 34%, 1)",
      darkBackground: "hsla(358, 84%, 14%, 1)",
      text: "white",
    },
  ];

  const index = Math.round(Math.random() * (colors.length - 1));
  return colors[index];
};

const getSong = (id) => {
  const songs = [
    "https://www.youtube.com/embed/aAkMkVFwAoo",
    "https://www.youtube.com/embed/mN7LW0Y00kE",
    "https://www.youtube.com/embed/30TkClWvT5k",
    "https://www.youtube.com/embed/LUjn3RpkcKY",
    "https://www.youtube.com/embed/EM2Fnp_qnE8",
    "https://www.youtube.com/embed/YiBoWNo6xDs",
    "https://www.youtube.com/embed/nlR0MkrRklg",
    "https://www.youtube.com/embed/E8gmARGvPlI",
    "https://www.youtube.com/embed/IJPc7esgvsA",
    "https://www.youtube.com/embed/J-8VCL4uSUc",
    "https://www.youtube.com/embed/QHLd7HQfZfA",
    "https://www.youtube.com/embed/pvA7-EjaSPI",
    "https://www.youtube.com/embed/aV-eP8K6bhw",
    "https://www.youtube.com/embed/VU8teLsxYRY",
    "https://www.youtube.com/embed/IbRtGMm96F8",
    "https://www.youtube.com/embed/gset79KMmt0",
    "https://www.youtube.com/embed/2P8RU_dHyi4",
    "https://www.youtube.com/embed/tIyE3IrC7r0",
    "https://www.youtube.com/embed/7MjV6SIdfuQ",
    "https://www.youtube.com/embed/qx7LlwBhZoE",
    "https://www.youtube.com/embed/uKSxRGggzkU",
    "https://www.youtube.com/embed/AaQa2jfoWE8",
    "https://www.youtube.com/embed/V3EYjVPRClU",
    "https://www.youtube.com/embed/rZCEBibnRM8",
  ];
  // return songs[id - 1];
  return songs[id - 1];
};

const [_, ...array] = Array.from(Array(25).keys());
const data = array.map((ele) => {
  return {
    id: ele,
    isOpened: false,
    color: getColor(),
    song: getSong(ele),
  };
});

const Calendar = () => {
  const [cards, setCards] = useState(data);

  const setIsOpened = (cardId) => {
    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, isOpened: true } : card
    );

    setCards(newCards);
  };

  return (
    <CalendarStyle>
      <Title />
      {cards.map((card) => (
        <Card
          id={card.id}
          key={card.id}
          isOpened={card.isOpened}
          onClick={() => setIsOpened(card.id)}
          color={card.color}
          song={card.song}
        />
      ))}
    </CalendarStyle>
  );
};

export default Calendar;
