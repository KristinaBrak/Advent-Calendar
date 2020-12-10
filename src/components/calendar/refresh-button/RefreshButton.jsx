import React, { useState } from "react";
import RefreshButtonStyle from "./RefreshButtonStyle";
import { data } from "./Buttons";

const RefreshButton = ({ onRefresh }) => {
  const [buttons, setButtons] = useState(data);

  const changeButtons = (key) => {
    if (key !== buttons.length - 1) {
      const nextKey = key + 1;
      //make next key button visible
      const tempButtons = [...buttons].map((button) =>
        button.key === nextKey ? { ...button, hidden: false } : button
      );
      //hide current key button
      const newButtons = tempButtons.map((button) =>
        button.key === key ? { ...button, hidden: true } : button
      );
      setButtons(newButtons);
    }
  };

  return (
    <>
      {buttons.map((button) => (
        <RefreshButtonStyle
          key={button.key}
          hidden={button.hidden}
          onMouseEnter={() => changeButtons(button.key)}
          onClick={onRefresh}
          position={button.position}
        >
          {button.text}
        </RefreshButtonStyle>
      ))}
    </>
  );
};

export default RefreshButton;
