import styled from "styled-components";

const getJustifyContent = () => {
  const number = Math.random();
  if (number < 0.5) {
    return "flex-end";
  }
  return "flex-start";
};

const NavBarStyle = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: ${() => getJustifyContent()};

  & button {
    width: 100px;
    height: auto;
    text-align: center;
    font-family: "Mountains of Christmas";
    font-size: 25px;
    font-weight: bold;
    margin: 5px 20px 5px 20px;
    padding: 3px;
    border-color: hsla(45, 100%, 89%, 1);
    background-color: hsla(45, 100%, 89%, 1);
    border-radius: 10px;
  }

  & button:hover {
    background-color: hsla(358, 84%, 14%, 1);
    border-color: hsla(358, 84%, 14%, 1);
    box-shadow: 5px 5px 10px #222;
    color: white;
    font-weight: bold;
  }

  & button:activate {
    background-color: hsla(358, 84%, 14%, 1);
    border-color: hsla(358, 84%, 14%, 1);
  }
`;

export default NavBarStyle;
