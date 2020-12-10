import styled from "styled-components";

const CardStyle = styled.div`
  --milkColor: "hsla(45, 100%, 89%, 1)";
  --latteColor: "hsla(35, 100%, 82%, 1)";
  grid-area: ${({ id }) => `item${id}`};
  border: 2px green;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #222;
  background-color: ${(props) =>
    props.wasOpened ? "hsla(358,84%,14%,1)" : props.color.background};
  padding: 10px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & div {
    font-size: 70px;
    color: ${(props) => (props.wasOpened ? "transparent" : props.color.text)};
  }
`;

export default CardStyle;
