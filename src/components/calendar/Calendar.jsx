import React, { useState } from "react";
import Card from "./card/Card";
import Title from "./title/Title";
import CalendarStyle from "./CalendarStyle";

const getColor = () => {
  const colors = [
    "hsla(88, 28%, 57%, 1)",
    "hsla(107, 21%, 41%, 1)",
    "hsla(45, 100%, 89%, 1)",
    "hsla(35, 100%, 82%, 1)",
    "hsla(0, 57%, 49%, 1)",
    "hsla(358, 84%, 34%, 1)",
  ];
  const index = Math.round(Math.random() * (colors.length - 1));
  return colors[index];
};

const stuff = Array.from(Array(24).keys());
const data = stuff.map((ele) => {
  return {
    id: ele + 1,
    isOpened: false,
    color: getColor(),
  };
});

console.log(data);

const Calendar = () => {
  // const [cards, setCards] = useState(Array.from(Array(25).keys()));
  const [cards, setCards] = useState(data);

  const setIsOpened = (cardId) => {
    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, isOpened: !card.isOpened } : card
    );

    setCards(newCards);
  };

  return (
    <CalendarStyle>
      <Title>My Advent</Title>
      {cards.map((card) => (
        <Card
          id={card.id}
          key={card.id}
          isOpened={card.isOpened}
          onClick={() => setIsOpened(card.id)}
          color={card.color}
        />
      ))}
    </CalendarStyle>
  );
};

export default Calendar;
