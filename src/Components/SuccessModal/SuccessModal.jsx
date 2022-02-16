import React from "react";
import classes from "./SuccessModal.module.css";

const SuccessModal = (props) => {

  const { onCloseClick } = props;

  return (
    <div className={classes.ModalWrapper}>
      <div className={classes.successModal}>
        <div className={classes.closeButtonWrapper}>
          <span className={classes.closeButton} onClick={()=>onCloseClick()}>&times;</span>
        </div>
        <div className={classes.modalText}>Submit Successfuly Done!</div>
      </div>
    </div>
  );
};

export default SuccessModal;
