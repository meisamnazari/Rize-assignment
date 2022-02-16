import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CategoryHeader from "../CategoryHeader/CategoryHeader";
import NomineeCard from "../NomineeCard/NomineeCard";
import classes from "./Ballot.module.css";
import SuccessModal from "../SuccessModal/SuccessModal";

const Ballot = () => {
  const [nominees, setNominees] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNominees, setSelectedNominees] = useState([]);

  useEffect(() => {
    let newSelected = [];
    axios
      .get("/api/getBallotData")
      .then((res) => {
        setNominees(res.data.items);
        res.data.items.map((item, index) => {
          return newSelected.push({ categoryId: item.id, nominee: {} });
        });
        setSelectedNominees(newSelected);
      })
      .catch(() => {
        console.error("Server not respond");
      });
  }, []);

  const onSubmitClick = useCallback(() => {
    setModalOpen(true);
  }, [setModalOpen]);

  const onModalCloseClick = useCallback(() => {
    setModalOpen(false);
  }, [setModalOpen]);

  const onNomineeClick = useCallback(
    (categoryId, nomineeItem) => {
      let newSelected = [...selectedNominees];
      const ctegoryIndex = newSelected.findIndex(
        (item) => item.categoryId === categoryId
      );

      newSelected[ctegoryIndex] = {
        categoryId: categoryId,
        nominee: nomineeItem,
      };

      setSelectedNominees(newSelected);
    },
    [selectedNominees, setSelectedNominees]
  );

  const selectedCardFunc = useCallback(
    (categoryId, nominee) => {
      let selected = false;
      selectedNominees.map((item, index) => {
        if (item.categoryId === categoryId && item.nominee === nominee) {
          return (selected = true);
        }
      });
      return selected;
    },
    [selectedNominees]
  );

  return (
    <div className="ballot">
      {nominees.map((categoryItem, categoryIndex) => {
        return (
          <div key={categoryIndex} className={classes.category}>
            <CategoryHeader title={categoryItem.title} />
            <div className={classes.nomineesWrapper}>
              {categoryItem.items.map((nomineeItem, nomineeIndex) => {
                return (
                  <NomineeCard
                    nomineeItem={nomineeItem}
                    key={nomineeIndex}
                    onNomineeClick={() =>
                      onNomineeClick(categoryItem.id, nomineeItem)
                    }
                    selected={selectedCardFunc(categoryItem.id, nomineeItem)}
                    id={`${categoryIndex}-${nomineeIndex}`}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      <div className={classes.buttonWrapper}>
        <div
          className={classes.submitButton}
          onClick={() => onSubmitClick()}
          id={"submitButton"}
        >
          Submit
        </div>
      </div>
      {modalOpen && <SuccessModal onCloseClick={onModalCloseClick} />}
    </div>
  );
};

export default Ballot;
