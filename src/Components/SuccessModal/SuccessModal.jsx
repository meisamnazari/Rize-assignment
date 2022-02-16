import React from "react";
import classes from "./SuccessModal.module.css";

const SuccessModal = (props) => {
  const { onCloseClick } = props;

  return (
    <div className={classes.ModalWrapper}>
      <div className={classes.successModal} id={"successModal"}>
        <div className={classes.closeButtonWrapper}>
          <span
            className={classes.closeButton}
            onClick={() => onCloseClick()}
            id={"closeButton"}
          >
            &times;
          </span>
        </div>
        <div className={classes.modalText}>Submit Successfuly Done!</div>
      </div>
    </div>
  );
};

export default SuccessModal;
