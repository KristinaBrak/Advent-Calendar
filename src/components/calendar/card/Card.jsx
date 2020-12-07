import React from "react";
import CardStyle from "./CardStyle";
// import Dialog from "./dialog/Dialog";

const Card = ({ id, isOpened, onClick, color }) => {
  // const [isOpenDialog, setIsOpenDialog] = useState(false);

  // const openDialog = () => {
  //   if (!isOpened) {
  //     console.log("Open Sesamee");
  //     setIsOpenDialog(true);
  //   }
  // };

  // if (isOpened) {
  return (
    <>
      <CardStyle id={id} onClick={onClick} isOpened={isOpened} color={color}>
        <div>{id}</div>
      </CardStyle>
      {/* <Dialog
        isOpened={isOpenDialog}
        onRequestClose={() => setIsOpenDialog(false)}
      /> */}
    </>
  );
  // }

  // return (
  //   <CardStyle id={id} onClick={onClick} isOpened={isOpened} color={color}>
  //     <div>{id}</div>
  //   </CardStyle>
  // );
};

export default Card;
