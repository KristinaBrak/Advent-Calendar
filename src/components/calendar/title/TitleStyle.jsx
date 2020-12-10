import styled from "styled-components";

const TitleStyle = styled.div`
  grid-area: title;
  border: 5px dashed hsla(107, 21%, 41%, 1);
  background-color: hsla(358, 84%, 34%, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 44px;
  text-align: center;
  font-weight: bold;
  cursor: default;

  ::selection {
    background: transparent;
  }
`;

export default TitleStyle;
