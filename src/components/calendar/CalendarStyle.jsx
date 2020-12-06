import styled from "styled-components";
// import Card from "./card/Card";

const CalendarStyle = styled.div`
  display: grid;
  grid-template-columns: 150px 80px 150px 150px 120px 150px;
  grid-template-rows: repeat(14, 80px);
  justify-content: center;
  grid-gap: 10px 10px;
  grid-template-areas:
    "item0 item0 item0 item6 item6 item18"
    "item0 item0 item0 item6 item6 item11"
    "item10 item13 item13 item6 item6 item11"
    "item10 item13 item13 item16 item4 item4"
    "item10 item2 item2 item16 item4 item4"
    "item10 item2 item2 item24 item24 item20"
    "item19 item2 item2 item24 item24 item20"
    "item19 item15 item15 item24 item24 item9"
    "item5 item5 item1 item1 item1 item9"
    "item5 item5 item1 item1 item1 item8"
    "item17 item12 item12 item22 item22 item8"
    "item3 item12 item12 item7 item7 item8"
    "item3 item12 item12 item7 item7 item14"
    "item3 item21 item21 item21 item23 item14";
`;

export default CalendarStyle;
