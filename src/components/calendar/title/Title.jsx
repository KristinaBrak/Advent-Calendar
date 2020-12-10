import React, { useState } from "react";
import TitleStyle from "./TitleStyle";

const titles = [
  "My Advent Calendar",
  "Santa's Advent Calendar",
  "Elfo's Advent Calendar",
  "Rudolf's Advent Calendar",
  "Olaf's Advent Calendar",
  "Snowman's Advent Calendar",
];

const Title = () => {
  const [title, setTitle] = useState(titles[0]);

  const changeTitle = () => {
    const index = titles.indexOf(title);
    if (titles.length - 1 === index) {
      setTitle(titles[0]);
    } else {
      setTitle(titles[index + 1]);
    }
  };

  return (
    <TitleStyle
      onDoubleClick={() => {
        changeTitle();
      }}
    >
      {title}
    </TitleStyle>
  );
};

export default Title;
