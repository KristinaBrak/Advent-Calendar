import React from "react";
import CardStyle from "./CardStyle";
import Dialog from "./dialog/Dialog";

const Card = ({
  id,
  onClick,
  card: { wasOpened, color, song, isActive },
  setToInactive,
}) => {
  return (
    <>
      <CardStyle id={id} onClick={onClick} wasOpened={wasOpened} color={color}>
        <div>{id}</div>
      </CardStyle>
      <Dialog
        opened={isActive}
        id={id}
        onClose={() => setToInactive(id)}
        color={color}
        song={song}
      />
    </>
  );
};

export default Card;
