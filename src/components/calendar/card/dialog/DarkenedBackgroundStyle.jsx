import styled from "styled-components";

const DarkenedBackgroundStyle = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.8);
`;

export default DarkenedBackgroundStyle;
