import React, { useState } from "react";
import NavBarStyle from "./NavBarStyle";

const NavBar = ({ onRefresh }) => {
  const refreshText = "Refresh";
  const data = [
    {
      key: 0,
      text: refreshText,
      hidden: false,
    },
    {
      key: 1,
      text: refreshText,
      hidden: true,
    },
    {
      key: 2,
      text: refreshText,
      hidden: true,
    },
    {
      key: 3,
      text: refreshText,
      hidden: true,
    },
    {
      key: 4,
      text: refreshText,
      hidden: true,
    },
    {
      key: 5,
      text: refreshText,
      hidden: true,
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
    <NavBarStyle>
      {buttons.map((button) => (
        <button
          key={button.key}
          hidden={button.hidden}
          onMouseEnter={() => changeButtons(button.key)}
          onClick={onRefresh}
        >
          {button.text}
        </button>
      ))}
    </NavBarStyle>
  );
};

export default NavBar;
