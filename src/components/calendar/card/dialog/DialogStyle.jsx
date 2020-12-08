import styled from "styled-components";

const DialogStyle = styled.div`
  --width: 960px;
  --height: 530px;
  --borderLength: 20px;
  width: calc(var(--width) + 2 * var(--borderLength));
  height: calc(var(--height) + 2 * var(--borderLength));
  background: ${(props) => props.color.background};
  border-radius: 10px;
  border: 5px dashed red;
  position: fixed;
  left: calc(100vw / 2 - var(--width) / 2);
  top: calc(100vh / 2 - var(--height) / 2);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  & iframe {
    width: var(--width);
    height: var(--height);
    border-radius: 10px;
    
  }

  & button {
    position: absolute;
    left: calc(100% - var(--borderLength));
    top: 3px;
    width: 20px;
    height: 20px;
    border: none;
    color: ${(props) => props.color.text};
    padding: 0;
    font-weight: bold;
    font-size: 20px;
    background-color: transparent;
  }
`;

export default DialogStyle;
