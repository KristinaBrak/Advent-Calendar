import styled from "styled-components";

const CardStyle = styled.div`
  grid-area: ${({ id }) => `item${id}`};
  display: inline;
  border: 2px green;
  border-radius: 10px;
  box-shadow: 3px 3px 3px gray;
  background-color: ${(props) => (props.isOpened ? "black" : props.color)};
  color: white;
  font-size: 50px;
  padding: 10px;
  margin: 2px;
`;

export default CardStyle;
