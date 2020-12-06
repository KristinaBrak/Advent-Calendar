import React from "react";
import CardStyle from "./CardStyle";

const Card = ({ id, isOpened, onClick, color }) => {
  if (isOpened) {
    return (
      <CardStyle
        id={id}
        onClick={onClick}
        isOpened={isOpened}
        color={color}
      ></CardStyle>
    );
  }

  return (
    <CardStyle id={id} onClick={onClick} isOpened={isOpened} color={color}>
      {id}
    </CardStyle>
  );
};

export default Card;
