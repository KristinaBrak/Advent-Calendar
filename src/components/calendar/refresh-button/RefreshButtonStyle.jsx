import styled from "styled-components";

const RefreshButtonStyle = styled.button`
  position: absolute;
  & ${(props) => props.key} {
    top: ${(props) => props.position.x}px;
    left: ${(props) => props.position.y}px;
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

  &:hover {
    background-color: hsla(358, 84%, 14%, 1);
    border-color: hsla(358, 84%, 14%, 1);
    box-shadow: 5px 5px 10px #222;
    color: white;
    font-weight: bold;
  }

  &:activate {
    background-color: hsla(358, 84%, 14%, 1);
    border-color: hsla(358, 84%, 14%, 1);
  }
`;

export default RefreshButtonStyle;
