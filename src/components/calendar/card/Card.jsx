import React, { useState } from "react";
import CardStyle from "./CardStyle";
import Dialog from "./dialog/Dialog";

const Card = ({ id, isOpened, onClick, color, song }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const afterClick = () => {
    onClick();
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <CardStyle id={id} onClick={afterClick} isOpened={isOpened} color={color}>
        <div>{id}</div>
      </CardStyle>
      <Dialog
        opened={openDialog}
        id={id}
        onClose={() => setOpenDialog(false)}
        color={color}
        song={song}
      />
    </>
  );
};

export default Card;
