import styled from "styled-components";

const DialogStyle = styled.div`
  --width: 800px;
  --height: 600px;
  width: var(--width);
  height: var(--height);
  background: blue;
  border-radius: 10px;
  position: absolute;
  left: calc(100vw / 2 - var(--width) / 2);
  top: calc(100vh / 2 - var(--height) / 2);
  z-index: 2;
`;

export default DialogStyle;
