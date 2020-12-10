import React, { useState } from "react";
import Card from "./card/Card";
import Title from "./title/Title";
import CalendarStyle from "./CalendarStyle";
import RefreshButton from "./refresh-button/RefreshButton";
import { getSong } from "./Songs";
import { getColor } from "./CardColors";

const [, ...array] = Array.from(Array(25).keys());
const localData = localStorage.getItem("cards");
const data = localData
  ? JSON.parse(localData)
  : array.map((ele) => {
      return {
        id: ele,
        wasOpened: false,
        color: getColor(),
        song: getSong(ele),
        isActive: false,
      };
    });

const localCounter = localStorage.getItem("counter");
const counterData = localCounter ? Number(localCounter) : 1;

const Calendar = () => {
  const [cards, setCards] = useState(data);
  const [counter, setCounter] = useState(counterData);

  const setWasOpened = (cardId) => {
    const newCards = cards.map((card) => {
      const wasOpened = cardId === counter ? true : card.wasOpened;
      if (cardId === counter) {
        setCounter(counter + 1);
        localStorage.setItem("counter", counter + 1);
      }
      return card.id === cardId
        ? {
            ...card,
            wasOpened,
            isActive: wasOpened,
          }
        : card;
    });

    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards));
  };

  const setToInactive = (cardId) => {
    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, isActive: false } : card
    );
    setCards(newCards);
  };

  return (
    <div id="calendar">
      <RefreshButton
        onRefresh={() => {
          localStorage.removeItem("cards");
          localStorage.removeItem("counter");
          window.location.reload();
        }}
      />
      <CalendarStyle>
        <Title />
        {cards.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            onClick={() => setWasOpened(card.id)}
            card={card}
            setToInactive={setToInactive}
          />
        ))}
      </CalendarStyle>
    </div>
  );
};

export default Calendar;
