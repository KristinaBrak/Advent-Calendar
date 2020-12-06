import React, { useState } from "react";
import Card from "./card/Card";
import CalendarStyle from "./CalendarStyle";

const getColor = () => {
  const colors = ["blue", "red", "green"];
  const index = Math.round(Math.random() * (colors.length - 1));
  return colors[index];
};

const stuff = Array.from(Array(25).keys());
const data = stuff.map((ele) => {
  return {
    id: ele,
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
