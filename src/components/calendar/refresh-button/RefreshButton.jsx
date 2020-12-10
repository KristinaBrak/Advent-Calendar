import React, { useState } from "react";
import RefreshButtonStyle from "./RefreshButtonStyle";

const NavBar = ({ onRefresh }) => {
  const refreshText = "Refresh";
  const data = [
    {
      key: 0,
      text: refreshText,
      hidden: false,
      position: { x: 10, y: 10 },
    },
    {
      key: 1,
      text: refreshText,
      hidden: true,
      position: { x: 10, y: 1500 },
    },
    {
      key: 2,
      text: refreshText,
      hidden: true,
      position: { x: 300, y: 10 },
    },

    {
      key: 3,
      text: refreshText,
      hidden: true,
      position: { x: 500, y: 1200 },
    },
    {
      key: 4,
      text: refreshText,
      hidden: true,
      position: { x: 500, y: 1200 },
    },
    {
      key: 5,
      text: refreshText,
      hidden: true,
      position: { x: 700, y: 1300 },
    },
    {
      key: 6,
      text: refreshText,
      hidden: true,
      position: { x: 1200, y: 200 },
    },
    {
      key: 7,
      text: refreshText,
      hidden: true,
      position: { x: 10, y: 10 },
    },
  ];

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
    // <RefreshButtonStyle>
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
      {/* </RefreshButtonStyle> */}
    </>
  );
};

export default NavBar;
