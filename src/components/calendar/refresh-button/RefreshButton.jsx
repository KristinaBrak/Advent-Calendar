import React, { useState } from "react";
import RefreshButtonStyle from "./RefreshButtonStyle";

const getCoordinate = () => {
  const maxWinSize = document.documentElement.clientHeight + 200;
  const coordinate = Math.random() * maxWinSize;
  return Math.round(coordinate);
};

const NavBar = ({ onRefresh }) => {
  const refreshText = "Reset";
  const data = [
    {
      key: 0,
      text: refreshText,
      hidden: false,
      position: {
        x: 10,
        y: 10,
      },
    },
    {
      key: 1,
      text: refreshText,
      hidden: true,
      position: {
        x: getCoordinate(),
        y: getCoordinate(),
      },
    },
    {
      key: 2,
      text: refreshText,
      hidden: true,
      position: {
        x: getCoordinate(),
        y: getCoordinate(),
      },
    },
    {
      key: 3,
      text: refreshText,
      hidden: true,
      position: {
        x: getCoordinate(),
        y: getCoordinate(),
      },
    },
    {
      key: 4,
      text: refreshText,
      hidden: true,
      position: {
        x: getCoordinate(),
        y: getCoordinate(),
      },
    },
    {
      key: 5,
      text: refreshText,
      hidden: true,
      position: {
        x: getCoordinate(),
        y: getCoordinate(),
      },
    },
    {
      key: 6,
      text: refreshText,
      hidden: true,
      position: {
        x: getCoordinate(),
        y: getCoordinate(),
      },
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
