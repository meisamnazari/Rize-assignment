import React from "react";
import classes from "./NomineeCard.module.css";

const NomineeCard = (props) => {
  const { title, photoUrL } = props.nomineeItem;
  const { onNomineeClick, selected, id } = props;

  return (
    <div className={classes.nomineeCard} id={id}>
      <div className={classes.title}>{title}</div>
      <div className={classes.imageWrapper}>
        <img src={photoUrL} alt="" />
      </div>
      {selected ? (
        <div className={classes.selectedText}>
          <span>&#10003;</span>Selected
        </div>
      ) : (
        <div className={classes.button} onClick={onNomineeClick} id={"button"}>
          Vote
        </div>
      )}
    </div>
  );
};

export default NomineeCard;
