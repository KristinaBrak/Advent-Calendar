import React, { useEffect } from "react";
import DarkenedBackgroundStyle from "./DarkenedBackgroundStyle";
import DialogStyle from "./DialogStyle";

const Dialog = ({ opened, id, onClose, color, song }) => {
  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "";
  }, [opened]);

  if (opened) {
    return (
      <>
        <DarkenedBackgroundStyle onClick={onClose} />
        <DialogStyle color={color}>
          <iframe
            src={`${song}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`video${id}`}
          ></iframe>
          <button onClick={onClose}>X</button>
        </DialogStyle>
      </>
    );
  }

  return null;
};

export default Dialog;
