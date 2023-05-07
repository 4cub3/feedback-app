import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { FormContext } from "./formContext";
import useStoreLS from "../Store/StoreInLS";
const FormProvider = ({ children }) => {
  const [ storedItem, storeInLS ] = useStoreLS();
  const [feedback, setFeeback] = useState(storedItem ? storedItem : []);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeeback((prevExpense) => {
      return [newFeedback, ...prevExpense];
    });
    storeInLS(newFeedback);
  };

  const deleteFeedback = (id) => {
    setFeeback((prev) => {
      localStorage.setItem(
        "Store",
        JSON.stringify(prev.filter((itm) => itm.id !== id))
      );
      return prev.filter((item) => item.id !== id);
    });
  };

  //update feedbackItem
  const updateFeedbackItem = (id, updItem) => {
    setFeeback((prev) => {
      localStorage.setItem(
        "Store",
        JSON.stringify(
          prev.map((itm) => (itm.id === id ? { ...itm, ...updItem } : itm))
        )
      );
      return prev.map((itm) => (itm.id === id ? { ...itm, ...updItem } : itm));
    });
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  const values = {
    addFeedback,
    feedback,
    deleteFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedbackItem,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};

export default FormProvider;
