import React from "react";
import DarkenedBackgroundStyle from "./DarkenedBackgroundStyle";
import DialogStyle from "./DialogStyle";

const Dialog = ({ isOpen, onRequestClose }) => {
  if (isOpen) {
    return (
      <DarkenedBackgroundStyle>
        <DialogStyle>
          <div>Here I am</div>
          <button onClick={onRequestClose}>Click me</button>
        </DialogStyle>
      </DarkenedBackgroundStyle>
    );
  }
  return null;
};

export default Dialog;
